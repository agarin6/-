document.addEventListener('DOMContentLoaded', () => {
    const translateToggleButton = document.getElementById('translate-toggle');
    let currentLanguage = 'en';

    translateToggleButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        translatePage(currentLanguage);
    });

    function translatePage(language) {
        fetch('translations.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const translations = data[language];
                if (!translations) {
                    throw new Error('No translations found for the language: ' + language);
                }
                document.querySelectorAll('[data-translate]').forEach(element => {
                    const key = element.getAttribute('data-translate');
                    if (translations[key]) {
                        element.innerText = translations[key];
                    } else {
                        console.warn(`No translation found for key: ${key}`);
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching translations:', error);
            });
    }
});
