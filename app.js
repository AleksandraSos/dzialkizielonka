// Pobieramy ID z URL (np. gallery.html?id=39)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Zmieniamy tytuł
document.getElementById("title").innerText = "Galeria działki " + id;

// Kontener na zdjęcia
const gallery = document.getElementById("gallery");

// Zakładamy, że zdjęcia mają nazwę 1.jpg, 2.jpg, 3.jpg itd.
// Spróbujemy wczytać 20 pierwszych
for (let i = 1; i <= 20; i++) {
    let img = document.createElement("img");
    img.src = `${id}/${i}.jpg`;
    img.onerror = () => img.style.display = "none";
    gallery.appendChild(img);
}
