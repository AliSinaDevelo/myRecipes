// adding animation to the page when the user scrolls down the page

function scrollAppear() {
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (introPosition < screenPosition) {
	introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear);


