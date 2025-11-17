async function loadSingleMaddah() {
    const res = await fetch("../data/sounds.json");
    const data = await res.json();

    const filtered = data.filter(item => item.maddah === maddahName);

    const box = document.getElementById("sound-list");

    filtered.forEach(s => {
        box.innerHTML += `
            <div class="sound-box">
                <h3>${s.title}</h3>
                <p>${s.monasebat}</p>
                <audio controls src="${s.url}"></audio>
            </div>
        `;
    });
}

loadSingleMaddah();
