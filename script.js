const Iya = document.querySelector(".next");
const Text = document.getElementById("text");
const Image = document.querySelector("#image-gif");
const optionButtons = document.getElementById("option-buttons");
const btnNo = document.getElementById("btn-no");
const btnYes = document.getElementById("btn-yes");
const audio = document.getElementById("linkmp3");

Iya.addEventListener("click", function () {
    if (Iya.value == 0) { 
        audio.play().catch(function(error) {
            console.log("Musik tidak bisa diputar otomatis, perlu interaksi pengguna.");
        });
    }
    
    Iya.value = parseInt(Iya.value) + 1;

    Text.classList.remove('text-animate');
    void Text.offsetWidth; 

    if (Iya.value == 1) {
        Text.innerHTML = "Assalamualaikum, Hai Aku Nurfadil";
        Image.setAttribute("src", "halo.png");
    } else if (Iya.value == 2) {
        Text.innerHTML = "Saya mohon maaf jika ada salah";
        Image.setAttribute("src", "perkenalan.png");
    } else if (Iya.value == 3) {
        Text.innerHTML = "Karena memang manusia tempatnya salah dan lupa";
        Image.setAttribute("src", "mengingatkan.png");
    } else if (Iya.value == 4) {
        Text.innerHTML = "Di hari yang fitri ini, saya ingin memohon maaf lahir dan batin atas perbuatan saya yang salah, baik yang disengaja maupun tidak disengaja";
        Image.setAttribute("src", "perkenalan.png");
        Iya.style.display = "none"; // Sembunyikan tombol Next
        optionButtons.style.display = "flex"; // Munculkan pilihan Iya/Nggak
    }
    
    Text.classList.add('text-animate');
});

function lari() {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 50);
    
    btnNo.style.position = "fixed"; 
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

btnNo.addEventListener("mouseover", lari);
btnNo.addEventListener("click", lari);

btnYes.addEventListener("click", function() {
    optionButtons.style.display = "none";
    Text.classList.remove('text-animate');
    void Text.offsetWidth;
    
    Text.innerHTML = "Yeay! Terima kasih ya! <br><br> <b>Selamat Hari Raya Idul Fitri 1447 H</b>";
    Image.setAttribute("src", "https://c.tenor.com/57JSPYRo0k8AAAAj/lebaran-selamat-lebaran.gif");
    
    Text.classList.add('text-animate');
});