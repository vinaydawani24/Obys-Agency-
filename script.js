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

    var vid = document.querySelector("#video-container")
    var video = document.querySelector("#video-container video")
    vid.addEventListener("mouseenter", function () {
        gsap.to(".mousefollower", {
            opacity: 0
        })
        vid.addEventListener("mousemove", function (dets) {
            gsap.to("#video-cursor", {
                left: dets.x - 570,
                top: dets.y - 300
            })
        })
    })
    vid.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1
        })
        gsap.to("#video-cursor", {
            top: "-9%",
            left: "80%"
        })
    })
    var flag = 0;
    vid.addEventListener("click", function () {
        if (flag == 0) {
            video.play()
            video.style.opacity = 1
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-fill"></i>`
            gsap.to("#video-cursor", {
                scale: 0.5
            })
            flag = 1
        }
        else{
            video.pause()
            video.style.opacity = 0
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
            gsap.to("#video-cursor", {
                scale: 1
            })
            flag = 0
        }

    })

}
function SheryAinmation() {
    Shery.imageEffect(".img-div", {
        style: 5,
        gooey: true,
        // debug:true,
        config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -1, "range": [-1, 1] }, "zindex": { "value": "9996999", "range": [-9999999, 9999999] }, "aspect": { "value": 0.7773267571074688 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.23, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.5, "range": [0, 10] }, "metaball": { "value": 0.4, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
    });

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
function flag(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y
        })
    })
    document.querySelector("#center3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1
        })
    })
    document.querySelector("#center3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
}

function footerAnimation(){
    var footer = document.querySelector("#footer1")
footer.addEventListener("mouseenter",function(){
    footer.style.webkitTextStroke = "1px #fff";
    gsap.to("#footer1> h1",{
        fontFamily:"silk serif",
        fontWeight:500,
        color: "transparent", // Transparent text color
        duration: 0.5, // Smooth transition duration
        ease: "power3.out",
    })
})
footer.addEventListener("mouseleave",function(){
    gsap.to("#footer1> h1",{
        fontFamily:"plain Light",
        color:"white",
        duration:0.5,
        fontWeight:700,
        ease: "power3.out",
    })
    footer.style.webkitTextStroke = "0px transparent";
})
}
loaderAnimation()
loco()
cursor()
SheryAinmation()
flag()
footerAnimation()