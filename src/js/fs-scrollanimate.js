var FsScrollAnimate = function() {
    let windowHeight;
    let _this = this;
    let animateElements;
    this.init = () => {
        windowHeight = window.innerHeight;
        animateElements = document.querySelectorAll('.fs-scroll');
        checkElements();
        configureScroll();
    }

    function configureScroll() {
        document.addEventListener('scroll', checkElements, {passive: true});
    }

    function checkElements() {
        animateElements.forEach((_el, index) => {
            if (_el.getBoundingClientRect().top > windowHeight - 50) {
                return;
            }

            animateElement(_el);
        })
    }

    function animateElement(_el) {
        _el.classList.remove('fs-scroll');
    }
}

var fsScrollAnimate = new FsScrollAnimate();
fsScrollAnimate.init();