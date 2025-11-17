async function loadPhotos() {
    const res = await fetch("data/photos.json");
    const photos = await res.json();

    let box = document.getElementById("photo-gallery");
    photos.forEach(p => {
        box.innerHTML += `
            <div>
                <img src="${p.url}" alt="${p.title}">
                <p>${p.title}</p>
            </div>
        `;
    });
}
loadPhotos();
