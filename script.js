// Reveal Surprise Message
document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("surpriseMessage").classList.remove("hidden");
});

// Play/Pause Romantic Music
document.getElementById("playMusic").addEventListener("click", function() {
    let music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
        this.textContent = "Pause Romantic Music 🎶";
    } else {
        music.pause();
        this.textContent = "Play Romantic Music 🎶";
    }
});