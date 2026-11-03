const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const root = path.resolve(__dirname, '..');
  const files = {
    '/': ['vocab_app_byClaude.html', 'text/html'],
    '/vocab_app_byClaude.js': ['vocab_app_byClaude.js', 'text/javascript'],
    '/vocab_app_byClaude.css': ['vocab_app_byClaude.css', 'text/css']
  };
  const server = http.createServer((req, res) => {
    const file = files[req.url];
    if (!file) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', `${file[1]}; charset=utf-8`);
    res.end(fs.readFileSync(path.join(root, file[0])));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH });
    const context = await browser.newContext();
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.route('https://**/*', route => route.abort());
    const url = `http://127.0.0.1:${server.address().port}`;
    await page.goto(url);
    assert.equal(await page.locator('.library-card').count(), 0);
    const legacy = [{ word: 'legacy', meaning: '原有單字', quizCount: 7, streak: 3, mastered: true }];
    await page.evaluate(data => {
      localStorage.removeItem('wordcraft_v2');
      localStorage.setItem('wordcraft_v1', JSON.stringify(data));
    }, legacy);
    await page.reload();
    assert.equal(await page.locator('.library-card').count(), 1);
    assert.match(await page.locator('.library-card').innerText(), /我的單字庫.*1 個單字 · 1 個熟練/s);
    await page.locator('.library-card').getByRole('button', { name: '編輯', exact: true }).click();
    assert.match(await page.locator('#word-list').innerText(), /測驗 7 次/);
    await page.getByRole('button', { name: '← 返回首頁' }).click();
    await page.locator('#library-name').fill('中山考古題 <A>');
    await page.getByRole('button', { name: '建立單字庫', exact: true }).click();
    assert.equal(await page.locator('#active-library-name').innerText(), '中山考古題 <A>');
    assert.match(await page.locator('#word-list').innerText(), /單字庫是空的/);
    await page.locator('#import-file').setInputFiles({
      name: 'words.json', mimeType: 'application/json',
      buffer: Buffer.from(JSON.stringify([
        { word: 'cryptography', meaning: '密碼學', phonetic: '/secret/' },
        { word: 'analog circuit', meaning: '類比電路' },
        { word: 'graphics processing unit', meaning: '圖形處理器（GPU）' },
        { word: `one's "choice"`, meaning: '選擇' },
        { word: ' CRYPTOGRAPHY ', meaning: '重複' }, null, { word: 42, meaning: '無效' }
      ]))
    });
    await page.waitForFunction(() => document.querySelectorAll('.word-card').length === 4);
    await page.getByTitle('編輯', { exact: true }).first().click();
    await page.locator('#new-meaning').fill('密碼學（已編輯）');
    await page.getByRole('button', { name: '儲存修改' }).click();
    assert.match(await page.locator('#word-list').innerText(), /密碼學（已編輯）/);
    await page.locator('.tab').filter({ hasText: '測驗' }).click();
    await page.locator('#chip-mc').click();
    await page.getByRole('button', { name: '開始測驗', exact: true }).click();
    const question = await page.evaluate(() => ({
      prompt: document.querySelector('#q-word').textContent,
      answer: currentQ.word.word, meaning: currentQ.word.meaning,
      phonetic: document.querySelector('#q-phonetic').textContent,
      audio: document.querySelector('#q-audio-row').style.display
    }));
    assert.equal(question.prompt, question.meaning);
    assert.equal(question.phonetic, '');
    assert.equal(question.audio, 'none');
    await page.locator('#spell-input').fill(` ${question.answer.toUpperCase()} `);
    await page.getByRole('button', { name: '確認', exact: true }).click();
    assert.match(await page.locator('#spell-input').getAttribute('class'), /correct/);
    const count = await page.evaluate(() => currentQ.word.quizCount);
    await page.locator('#spell-input').press('Enter');
    assert.equal(await page.evaluate(() => currentQ.word.quizCount), count);
    await page.getByRole('button', { name: '下一題 →' }).click();
    await page.locator('#spell-input').fill('wrong answer');
    await page.getByRole('button', { name: '確認', exact: true }).click();
    assert.match(await page.locator('#q-feedback').innerText(), /正確拼法：/);
    await page.getByRole('button', { name: '← 返回首頁' }).click();
    assert.equal(await page.locator('.library-card').count(), 2);
    await page.reload();
    assert.equal(await page.locator('.library-card').count(), 2);
    const newCard = page.locator('.library-card').filter({ hasText: '中山考古題 <A>' });
    await newCard.getByRole('button', { name: '編輯', exact: true }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: '匯出 JSON' }).click();
    const download = await downloadPromise;
    const exported = JSON.parse(fs.readFileSync(await download.path(), 'utf8'));
    assert.equal(exported.length, 4);
    assert.equal(exported[0].meaning, '密碼學（已編輯）');
    await page.locator('.tab').filter({ hasText: '測驗' }).click();
    await page.locator('#chip-mc').click();
    await page.locator('#chip-spell').click();
    await page.getByRole('button', { name: '開始測驗', exact: true }).click();
    await page.evaluate(() => {
      currentQ = { word: words[3], type: 'mc', dir: 'en2zh' };
      quizQueue = [currentQ]; quizIndex = 0; showQuestion();
    });
    await page.locator('.choice-btn').filter({ hasText: '選擇' }).click();
    assert.match(await page.locator('.choice-btn.correct').innerText(), /選擇/);
    await page.getByRole('button', { name: '← 返回首頁' }).click();
    await newCard.getByRole('button', { name: '編輯', exact: true }).click();
    await page.getByRole('button', { name: '清空', exact: true }).click();
    await page.getByRole('button', { name: '確認清空' }).click();
    await page.getByRole('button', { name: '← 返回首頁' }).click();
    assert.match(await page.locator('.library-card').first().innerText(), /1 個單字 · 1 個熟練/);
    await page.locator('#library-name').fill('單字練習');
    await page.getByRole('button', { name: '建立單字庫', exact: true }).click();
    await page.locator('#new-word').fill('apple');
    await page.locator('#new-meaning').fill('蘋果');
    await page.getByRole('button', { name: '新增單字', exact: true }).click();
    await page.locator('.tab').filter({ hasText: '測驗' }).click();
    if (!await page.locator('#chip-mc').evaluate(el => el.classList.contains('sel'))) await page.locator('#chip-mc').click();
    if (await page.locator('#chip-spell').evaluate(el => el.classList.contains('sel'))) await page.locator('#chip-spell').click();
    await page.getByRole('button', { name: '開始測驗', exact: true }).click();
    assert.match(await page.locator('#toast').innerText(), /至少需要 4/);
    await page.locator('#chip-spell').click();
    await page.locator('#chip-mc').click();
    await page.getByRole('button', { name: '開始測驗', exact: true }).click();
    assert.equal(await page.locator('#q-word').innerText(), '蘋果');
    await page.getByRole('button', { name: '← 返回首頁' }).click();
    await page.setViewportSize({ width: 390, height: 844 });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await page.screenshot({ path: path.join(__dirname, 'home-mobile.png'), fullPage: true });
    await newCard.getByRole('button', { name: '編輯', exact: true }).click();
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    assert.deepEqual(errors, []);
    console.log('PASS: migration, creation, editing, import/export, library isolation, spelling, multiple choice, persistence, mobile layout');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
