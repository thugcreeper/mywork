const REPO = 'thugcreeper/Stock-Report';

let stocks = [];

// ==================== 初始化 ====================
window.onload = () => {
    const token = localStorage.getItem('gh_token');
    if (token) document.getElementById('gh-token').value = token;
    loadFromGitHub();
};

// ==================== Token ====================
function saveToken() {
    const token = document.getElementById('gh-token').value.trim();
    if (!token) { setStatus('Token 不能為空', 'red'); return; }
    localStorage.setItem('gh_token', token);
    setStatus('Token 已儲存', 'green');
    loadFromGitHub();
}

function getToken() {
    return localStorage.getItem('gh_token');
}

// ==================== 從 GitHub 載入 ====================
async function loadFromGitHub() {
    const token = getToken();
    if (!token) { setStatus('請先填入 GitHub Token 並按儲存', 'red'); return; }

    try {
        setStatus('載入中...', 'gray');
        const res = await fetch(`https://api.github.com/repos/${REPO}/contents/stocks.json`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (res.status === 401) throw new Error('Token 無效或已過期，請重新設定');
        if (res.status === 404) throw new Error('找不到 stocks.json，請確認 repo 和路徑是否正確');
        if (!res.ok) throw new Error(`GitHub API 錯誤：${res.status}`);

        const data = await res.json();
        stocks = JSON.parse(atob(data.content));
        localStorage.setItem('gh_sha', data.sha);
        renderTable();
        setStatus(`載入成功，共 ${stocks.length} 支股票`, 'green');
    } catch (e) {
        setStatus('載入失敗：' + e.message, 'red');
    }
}

// ==================== 渲染表格 ====================
function renderTable() {
    const tbody = document.getElementById('stock-table');
    tbody.innerHTML = '';
    stocks.forEach((s, i) => {
        tbody.innerHTML += `
      <tr id="row-${i}">
        <td>
          <input id="id-${i}" value="${s.stock_id}" placeholder="例：2330"
            onchange="stocks[${i}].stock_id = this.value.trim(); clearError(this)">
        </td>
        <td>
          <input id="name-${i}" value="${s.stock_name}" placeholder="例：台積電"
            onchange="stocks[${i}].stock_name = this.value.trim(); clearError(this)">
        </td>
        <td>
          <input id="price-${i}" type="number" value="${s.avg_price}" step="0.01" min="0.01"
            placeholder="例：500"
            onchange="stocks[${i}].avg_price = parseFloat(this.value); clearError(this)">
        </td>
        <td>
          <select onchange="stocks[${i}].market = this.value">
            <option value="twse" ${s.market === 'twse' ? 'selected' : ''}>上市 (twse)</option>
            <option value="tpex" ${s.market === 'tpex' ? 'selected' : ''}>上櫃 (tpex)</option>
          </select>
        </td>
        <td>
          <button class="btn btn-delete" onclick="deleteRow(${i})">刪除</button>
        </td>
      </tr>`;
    });
}

function addRow() {
    stocks.push({ stock_id: '', stock_name: '', avg_price: 0, market: 'twse' });
    renderTable();
    // 捲到最底
    window.scrollTo(0, document.body.scrollHeight);
}

function deleteRow(i) {
    if (!confirm(`確定要刪除「${stocks[i].stock_name || stocks[i].stock_id}」？`)) return;
    stocks.splice(i, 1);
    renderTable();
}

// ==================== 驗證 ====================
const STOCK_ID_REGEX = /^[A-Za-z0-9]{4,6}$/;

function validateAll() {
    let valid = true;

    // 清除所有舊錯誤
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-msg').forEach(el => el.remove());

    stocks.forEach((s, i) => {
        const idInput = document.getElementById(`id-${i}`);
        const nameInput = document.getElementById(`name-${i}`);
        const priceInput = document.getElementById(`price-${i}`);

        if (!STOCK_ID_REGEX.test(s.stock_id)) {
            showFieldError(idInput, '代號需為 4~6 碼數字或英文字母');
            valid = false;
        }

        // 檢查代號重複
        const dupIdx = stocks.findIndex((other, j) => j !== i && other.stock_id === s.stock_id);
        if (s.stock_id && dupIdx !== -1) {
            showFieldError(idInput, `代號「${s.stock_id}」重複`);
            valid = false;
        }

        if (!s.stock_name) {
            showFieldError(nameInput, '名稱不能為空');
            valid = false;
        }

        if (!s.avg_price || s.avg_price <= 0 || isNaN(s.avg_price)) {
            showFieldError(priceInput, '均價必須大於 0');
            valid = false;
        }
    });

    return valid;
}

function showFieldError(input, msg) {
    input.classList.add('error');
    const div = document.createElement('div');
    div.className = 'error-msg';
    div.textContent = msg;
    input.parentNode.appendChild(div);
}

function clearError(input) {
    input.classList.remove('error');
    const msg = input.parentNode.querySelector('.error-msg');
    if (msg) msg.remove();
}

// ==================== 儲存到 GitHub ====================
async function saveToGitHub() {
    const token = getToken();
    const sha = localStorage.getItem('gh_sha');
    if (!token) { setStatus('請先設定 Token', 'red'); return; }
    if (stocks.length === 0) { setStatus('持股清單不能為空', 'red'); return; }
    if (!validateAll()) { setStatus('請修正上方錯誤後再儲存', 'red'); return; }

    try {
        setStatus('儲存中...', 'gray');
        const content = btoa(unescape(encodeURIComponent(JSON.stringify(stocks, null, 2))));
        const res = await fetch(`https://api.github.com/repos/${REPO}/contents/stocks.json`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `update stocks.json - ${new Date().toLocaleDateString('zh-TW')}`,
                content,
                sha
            })
        });

        if (res.status === 401) throw new Error('Token 無效或已過期');
        if (res.status === 409) throw new Error('檔案衝突，請重新整理頁面再試');
        if (!res.ok) throw new Error(`GitHub API 錯誤：${res.status}`);

        const data = await res.json();
        localStorage.setItem('gh_sha', data.content.sha);
        setStatus('已成功儲存到 GitHub ✓，下次 Actions 執行時將套用新清單', 'green');
    } catch (e) {
        setStatus('儲存失敗：' + e.message, 'red');
    }
}

// ==================== 狀態列 ====================
function setStatus(msg, color) {
    const el = document.getElementById('status-bar');
    el.textContent = msg;
    el.style.color = color;
}