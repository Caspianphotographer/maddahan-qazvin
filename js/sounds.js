let sounds = [];

async function loadSounds() {
    const res = await fetch("data/sounds.json");
    sounds = await res.json();
    renderSounds();
}

function renderSounds() {
    let container = document.getElementById("sound-container");
    container.innerHTML = "";

    sounds.forEach(s => {
        container.innerHTML += `
            <div class="sound-box">
                <h3>${s.title}</h3>
                <p>${s.maddah} — ${s.monasebat}</p>
                <small>${s.date}</small>
                <audio controls src="${s.url}"></audio>
            </div>
        `;
    });
}

function sortSounds() {
    let type = document.getElementById("sortSelect").value;

    if (type === "newest") {
        sounds.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
        sounds.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    renderSounds();
}

loadSounds();
