document.addEventListener('keydown', function (event) {
    const { keyCode } = event;
    console.log({ keyCode });
    const hitKey = document.querySelector(`.key[data-keycode="${keyCode}"]`);
    if (!hitKey) {
        return;
    }
    hitKey.classList.add('pressed');
    setTimeout(() => {
        hitKey.classList.remove('pressed')
    }, 0.7);
});

