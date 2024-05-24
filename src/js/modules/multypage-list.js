//import '../../scss/base/multypage.scss';

let openInfo = document.querySelector('#multypage-open');

openInfo.addEventListener('click', e => {
    document.documentElement.classList.toggle('_multypage-opened');
});