function initializeRecordEditor(data) {
    const songSelector = document.getElementById("songSelector");
    const difficultySelector = document.getElementById("difficultySelector");

    const songNames = [...new Set(data.map(song => song.song))];
    const placeholder = new Option("請選擇歌曲", "", true, true);
    placeholder.disabled = true;
    songSelector.replaceChildren(placeholder, ...songNames.map(song => new Option(song, song)));

    function updateSongPreview() {
        const preview = document.getElementById("songPreview");
        const songs = songSelector.value ? getSongOptions(songSelector.value) : [];
        difficultySelector.replaceChildren(...songs.map(song => new Option(song.difficulty, song.difficulty)));
        if (!songs.length) {
            preview.hidden = true;
            return;
        }
        const previewImage = document.getElementById("songPreviewImage");
        previewImage.src = songs[0].image;
        previewImage.alt = `${songs[0].song} 曲繪`;
        setImageFallback(previewImage, songs[0].song);
        preview.hidden = false;
    }

    songSelector.addEventListener("change", updateSongPreview);
    document.getElementById("addRecordButton").addEventListener("click", () => {
        const rows = document.querySelectorAll("#playpttTable tbody tr");
        if (rows.length >= 30) {
            showRecordToast("表格最多只能有 30 rows", "error");
            return;
        }

        const selectedSong = getSongOptions(songSelector.value).find(song => song.difficulty === difficultySelector.value);
        const score = Number(document.getElementById("recordScore").value);
        if (!selectedSong || !Number.isFinite(score) || score < 0 || score > 10002221) {
            showRecordToast("請選擇歌曲並輸入 0 到 10002221 的分數", "error");
            return;
        }
        addRecordRow({ ...selectedSong, score, playptt: calculatePlayptt(score, selectedSong.constant) });
        document.getElementById("recordScore").value = "";
        updateRecordSummary();
        showRecordToast(`已新增「${selectedSong.song}」${selectedSong.difficulty}，分數 ${score}`, "success");
    });

    updateSongPreview();
}

function showRecordToast(message, type = "error") {
    const toast = document.getElementById("recordToast");
    toast.textContent = message;
    toast.classList.toggle("success", type === "success");
    toast.classList.add("visible");
    clearTimeout(window.recordToastTimer);
    window.recordToastTimer = setTimeout(() => toast.classList.remove("visible"), 2400);
}
