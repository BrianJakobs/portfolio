var scrollButton = document.querySelector("#scroll"),
    workButton = document.querySelector("#landing button"),
    moreAbout = document.querySelector("#moreAbout"),
    parallaxMouse = document.querySelector(".parallaxMouse"),
    portSpan = document.querySelector("#projects .back-text"),
    menuTrigger = document.querySelector(".menu-trigger"),
    docBody = document.querySelector("body"),
    actualInnerWidth = document.body.clientWidth,
    menuOverlay = document.querySelector("#menu-overlay"),
       menuGrid = document.querySelector("#menu-overlay .grid"),
    menuItems = document.querySelectorAll(".data ul li a"),
    toggle = document.querySelector(".switch input"),
    parallaxItems = document.querySelectorAll(".parallaxMouse"),
    el = document.createElement("output");


const currentTheme = sessionStorage.getItem("theme");

let isDark = true

if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
}

function themeMode() {
    isDark = !isDark;
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    sessionStorage.setItem("theme", theme);
}

window.addEventListener('load', function () {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll(".newPage");
    const animateIn = document.querySelectorAll(".animate-this");

    setTimeout(() => {
        transition_el.classList.add("onLeave");
    }, 200);

    setTimeout(() => {
        transition_el.classList.remove("isActive");
    }, 800);

    setTimeout(() => {
        transition_el.classList.remove("onLeave");
    }, 800);

    setTimeout(() => {
        contentAnimation();
    }, 350);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;
            transition_el.classList.add("isActive");

            setTimeout(() => {
                transition_el.classList.add("onLeave");
            }, 600);

            setTimeout(() => {
                transition_el.classList.remove("isActive");
            }, 1200);

            setTimeout(() => {
                transition_el.classList.remove("onLeave");
            }, 1200);

            setTimeout(() => {
                window.location.href = target;
            }, 600);

        });
    }

    if (currentTheme == "dark") {
        document.body.classList.add("dark-theme");
    }

});

function menuNav() {
    menuTrigger.classList.toggle("active");
    menuOverlay.classList.toggle("slideDown");
    menuGrid.classList.toggle("menuOpacity");
}

menuTrigger.addEventListener("click", menuNav);

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
        menuGrid.classList.remove("menuOpacity");
        menuOverlay.classList.remove("slideDown");
        menuTrigger.classList.remove("active");
    });
}

function checkWidth() {
    actualInnerWidth = document.body.clientWidth;
}

ScrollTrigger.matchMedia({
    "(min-width: 1000px)": function () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({
            ease: "none"
        });

        const tl = gsap.timeline();
        let sections = gsap.utils.toArray(".scrollItem");

        tl.to(".sideScroll", {
            xPercent: -75
        });

        ScrollTrigger.create({
            animation: tl,
            trigger: "#projects",
            start: "top top",
            endTrigger: "#projects",
            end: "bottom -=200%",
            scrub: 0.2,
            pin: true
        });

        const pl = gsap.timeline();
        pl.to(portSpan, {
            xPercent: 60
        });

        ScrollTrigger.create({
            animation: pl,
            trigger: '#projects',
            start: 'top top',
            endTrigger: "#projects",
            end: "bottom -=200%",
            scrub: 0.3,
            ease: Power3.easeInOut
        });
    },

    "(max-width: 999px)": function () {},
    "all": function () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({
            ease: "none"
        });

        const bg = gsap.timeline();
        let sections = gsap.utils.toArray(".parallax img:last-of-type");

        bg.to(".parallax img:last-of-type", {
            xPercent: 7
        });

        ScrollTrigger.create({
            animation: bg,
            trigger: "#about",
            start: "top bottom",
            endTrigger: "#about",
            end: "bottom top",
            scrub: 0.2,
        });

        ScrollTrigger.batch(".appear", {
            onEnter: batch => {
                gsap.to(batch, {
                    duration: 0.6,
                    autoAlpha: 1,
                    delay: 0.1,
                    stagger: 0.2,
                    ease: Power2.easeInOut,
                })
            },
            once: true
        });
    }

});

function parallax(e) {
    for (var i = 0; i < parallaxItems.length; i++) {
        const speed = parallaxItems[i].getAttribute('data-speed');
        const x = (window.innerWidth / 2 - e.pageX) / 100 * speed;
        const y = (window.innerHeight / 2 - e.pageY) / 100 * speed;
            
        parallaxItems[i].style.transform = "translate(" + x + "px, " + y + "px)";
    }
}

function small() {
    console.log("small");
    
    document.removeEventListener("mousemove", parallax);
    
    document.querySelector('lottie-player').addEventListener('stop', pause());
}

function large() {
    console.log("large");

    document.addEventListener("mousemove", parallax);
    
    LottieInteractivity.create({
        renderer: 'canvas',
        player: '#firstLottie',
        mode: 'cursor',
        container: '#landing',
        actions: [
            {
                position: {
                    x: [0, 1],
                    y: [-1, 2]
                },
                type: 'seek',
                frames: [0, 60],
            },
        ],
    });
}

var bounds = [
    {
        min: 0,
        max: 999,
        func: small
    },
    {
        min: 1000,
        func: large
    }
];

function resizeFn() {
    var lastBoundry;
    return function () {
        var width = window.innerWidth;
        var boundry, min, max;
        for (var i = 0; i < bounds.length; i++) {
            boundry = bounds[i];
            min = boundry.min || Number.MIN_VALUE;
            max = boundry.max || Number.MAX_VALUE;
            if (width > min && width < max &&
                lastBoundry !== boundry) {
                lastBoundry = boundry;
                return boundry.func.call(boundry);
            }
        }
    }
};

window.addEventListener('resize', resizeFn());
window.addEventListener('load', resizeFn());


window.addEventListener('onload', function () {
    window.trigger('resize');
});

window.addEventListener('resize', function () {});



function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();

    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        left: "100%",
        width: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,

    });

    tl.set(".loading-screen", {
        left: "-100%",
    });

    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 1500);
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 1.2,
        y: 50,
        autoAlpha: 0,
        stagger: 0.2,
        ease: Power2.easeInOut,
    });
    tl.from(".animate-svg", {
        duration: 1.2,
        width: 200,
        autoAlpha: 0,
        ease: Power2.easeOut,
    });
}

scrollButton.addEventListener("click", function () {
    gsap.to(window, {
        duration: 1,
        scrollTo: ".scrollTo",
        ease: Power2.easeOut
    });
});

workButton.addEventListener("click", function () {
    gsap.to(window, {
        duration: 1.5,
        scrollTo: "#projects",
        scrollToease: Sine.easeInOut
    });
});

toggle.addEventListener("click", themeMode)

moreAbout.addEventListener("click", function () {
    gsap.to(window, {
        duration: 2,
        scrollTo: "#about",
        ease: Sine.easeInOut
    });
});