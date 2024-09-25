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
    tl.from("#center1,#page2", {
        opacity: 0
    }, "-=2.3")
}
function cursor() {
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    Shery.makeMagnet("#nav-part2 h4");
}
function SheryAinmation() {
    Shery.imageEffect(".img-div", {
        style: 5,
        debug: true,
        gooey: true
    })
}
function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loaderAnimation()
loco()
cursor()
// SheryAinmation()