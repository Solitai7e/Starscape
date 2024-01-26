const bgm = new Howl({
    src: "bgm.wav",
    volume: 0.35,
    loop: true
});

bgm.play();


function rand(max) {
    return Math.floor(Math.random() * (max - 0) + 0);
}

document.addEventListener("DOMContentLoaded", () => {
    const $starscape = document.getElementById("starscape");
    const $star      = document.getElementById("star");


    $starscape.style.backgroundImage = rand(2) ?
        'url("starscape0.png")' :
        'url("starscape1.png")';


    function spawnStar() {
        $star.style.left = `${rand(100)}vw`;
        $star.style.top  = `${rand(40)}vh`;

        $star.style.display = null;
    }

    $star.addEventListener("animationend", () => {
        $star.style.display = "none";
        setTimeout(spawnStar, rand(10000));
    });

    setTimeout(spawnStar, rand(10000));
});
