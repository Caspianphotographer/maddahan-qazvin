// نمونه داده‌ها — بعداً اتصال خودکار می‌گذاریم
let sounds = [
    {
        title: "روضه حضرت زهرا",
        maddah: "حام محمد نبوی",
        date: "2024-10-12",
        url: "https://filesamples.com/samples/audio/mp3/sample3.mp3",
        monasebat: "فاطمیه"
    },
    {
        title: "زمینه محرم",
        maddah: "کربلایی جواد نظری",
        date: "2024-09-01",
        url: "https://filesamples.com/samples/audio/mp3/sample1.mp3",
        monasebat: "محرم"
    }
];

function renderSounds() {
    let container = document.getElementById("sound-container");
    container.innerHTML = "";

    sounds.forEach(s => {
        container.innerHTML += `
            <div class="sound-box">
                <h3>${s.title}</h3>
                <p>${s.maddah} — ${s.monasebat}</p>
                <audio controls src="${s.url}"></audio>
            </div>
        `;
    });
}

function sortSounds() {
    let type = document.getElementById("sortSelect").value;

    if (type === "newest") {
        sounds.sort((a, b) => new Date(b.date) - new Date(a.date));
    } 
    else {
        sounds.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    renderSounds();
}

renderSounds();
