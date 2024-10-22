const music = document.getElementById('background-music');
        const startButton = document.getElementById('start-button');
        const muteButton = document.getElementById('mute-button');

        startButton.addEventListener('click', () => {
            music.play().then(() => {
                startButton.style.display = 'none';
                muteButton.style.display = 'block';
            }).catch((error) => {
                console.log('Audio playback failed:', error);
            });
        });

        muteButton.addEventListener('click', () => {
            if (music.muted) {
                music.muted = false;
                muteButton.textContent = '🔊';
            } else {
                music.muted = true;
                muteButton.textContent = '🔈';
            }
        });