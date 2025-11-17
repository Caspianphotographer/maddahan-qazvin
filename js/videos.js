async function loadVideos() {
    const res = await fetch("data/videos.json");
    const videos = await res.json();

    let box = document.getElementById("video-gallery");

    videos.forEach(v => {
        box.innerHTML += `
            <div class="video-box">
                <h3>${v.title}</h3>
                <iframe src="${v.url}" allowfullscreen></iframe>
            </div>
        `;
    });
}

loadVideos();
