document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');
    
    const playPromise = video.play().catch(error => {
        console.log("Autoplay bloccato:", error);
        // Aggiungi un pulsante di fallback se necessario
    });
});