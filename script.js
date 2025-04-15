window.addEventListener('deviceorientation', (event) => {
    if (event.absolute) {
        const needle = document.querySelector('.needle');
        const degree = document.querySelector('.degree');
        const rotation = 360 - event.alpha;
        
        needle.style.transform = `rotate(${rotation}deg)`;
        degree.textContent = `${Math.round(rotation)}°`;
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => console.log('ServiceWorker registered'))
        .catch(err => console.log('ServiceWorker registration failed:', err));
}