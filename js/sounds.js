let sounds = [];
let allSounds = [];

async function loadSounds() {
    const res = await fetch("data/sounds.json");
    allSounds = await res.json();
    sounds = [...allSounds];
    renderSounds();
}

function renderSounds() {
    const container = document.getElementById("sound-container");
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

function filterSounds() {
    const selectMaddah = document.getElementById("filterMaddah").value;
    const selectMona = document.getElementById("filterMonasebat").value;

    sounds = allSounds.filter(item => {
        return (selectMaddah === "" || item.maddah === selectMaddah) &&
               (selectMona === "" || item.monasebat === selectMona);
    });

    renderSounds();
}

function searchSounds() {
    const txt = document.getElementById("searchBox").value.trim();

    sounds = allSounds.filter(item => 
        item.title.includes(txt) ||
        item.maddah.includes(txt) ||
        item.monasebat.includes(txt)
    );

    renderSounds();
}

loadSounds();
