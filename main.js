const cursor = document.getElementById('cursor');
const plate = document.getElementById('plate');

// get animating cursor position
document.body.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.set(cursor, {
        x: mouseX,
        y: mouseY
    });
})

//Egg cracking timeline
const eggCrackTl = gsap.timeline({paused: true});

eggCrackTl
.addLabel("crackStart")
.to(cursor, {
    opacity: 1,
    duration: 0,
    onStart: () => {
        plate.classList.add('cursor-on')
    }
})
.to("#huevos-crack", {
    y: 15,
    ease: 'back.out(10)'
})
.to("#huevos-crack", {
    transformOrigin: "center",
    rotate: 90,
},"<")
.to("#egg-top", {
    transformOrigin: "center top",
    rotate: 30,
    y: 30
},"crack")
.to("#egg-btm", {
    transformOrigin: "center bottom",
    rotate: -30,
    y: -30,

},"crack")
.to(cursor, {
    opacity: 0,
    onStart: () => {
        plate.classList.remove('cursor-on')
    }
})

//Click Event on the Plate (Egg Cracking)
plate.addEventListener('click', () => {
    eggCrackTl.restart()
})