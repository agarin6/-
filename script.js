document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const audioToggleButton = document.getElementById('audio-play-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const audio = new Audio('Дора.mp3');

    toggleButton.addEventListener('click', () => {
        if (prefersDarkScheme.matches) {
            document.body.classList.toggle('light-mode');
        } else {
            document.body.classList.toggle('dark-mode');
        }
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    toggleButton.addEventListener('click', function () {
        let theme;
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        } else if (document.body.classList.contains('light-mode')) {
            theme = 'light';
        }
        localStorage.setItem('theme', theme);
    });

    audioToggleButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});