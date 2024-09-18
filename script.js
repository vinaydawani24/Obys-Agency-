function loaderAnimation() {
    var tl = gsap.timeline()

    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    })
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5 = document.querySelector("#line1-part1 h5")
            var grow = 0;

            setInterval(function () {
                if (grow < 100) {
                    h5.innerHTML = grow++
                }
                else {
                    h5.innerHTML = grow
                }
            }, 33)
        }
    })
    tl.to(".line h2", {
        opacity: 1,
        animationName: "now"
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 3.2
    })
    tl.from("#page1", {
        delay: 0.3,
        y: 1600,
        opacity: 0,
        ease: "power2",
        duration: 0.5

    })
    tl.to("#loader", {
        display: "none"
    })
    tl.from("#center1 h1,#center2 h1,#center3 h2,#center4 h1", {
        y: 120,
        stagger: 0.15
    })
    tl.from("#nav", {
        opacity: 0
    })
}
function cursor() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })
    Shery.makeMagnet("#nav-part2 h4");
}
loaderAnimation()
cursor()

