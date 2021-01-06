var scrollButton = document.querySelector("#scroll"),
    workButton = document.querySelector("#landing button"),
    moreAbout = document.querySelector("#moreAbout"),
    portSpan = document.querySelector("#projects .back-text"),
    menuTrigger = document.querySelector(".menu-trigger"),
    docBody = document.querySelector("body"),
    actualInnerWidth = document.body.clientWidth,
    menuOverlay = document.querySelector("#menu-overlay"),
    cursorOuter = document.querySelector(".cursor-outer"), 
    cursorInner = document.querySelector(".cursor-inner"),
    menuGrid = document.querySelector("#menu-overlay .grid"),
    menuItems = document.querySelectorAll(".data ul li a"),
    
    el = document.createElement("output");
    

document.body.append(el);
Object.assign(el.style, {
  position: "fixed",
  bottom: 0,
  left: 0,
  background: "red",
  color: "white",
  padding: "5px",
  fontSize: "11px",
  opacity: 0.7
});

function updateOutput() {
  var html = document.documentElement;
  el.value = html.clientWidth + " × " + html.clientHeight;
}

window.addEventListener("resize", updateOutput);
updateOutput();

function menuNav() {
    menuTrigger.classList.toggle("active");
    menuOverlay.classList.toggle("slideDown");
    menuGrid.classList.toggle("menuOpacity");
}

menuTrigger.addEventListener("click", menuNav);

 for (var i = 0; i < menuItems.length; i++) {
     menuItems[i].addEventListener("click", function() {
         menuGrid.classList.remove("menuOpacity");
         menuOverlay.classList.remove("slideDown");
         menuTrigger.classList.remove("active");
     });
 }

gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ease: "none"});
      
    const tl = gsap.timeline();
    let sections = gsap.utils.toArray(".scrollItem");
    
    tl.to(".sideScroll", {xPercent: -75});

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

    pl.to(portSpan, {xPercent: 60});

    ScrollTrigger.create ({
        animation: pl,
        trigger: '#projects',
        start: 'top top',
        endTrigger: "#projects",
        end: "bottom -=200%",
        scrub: 0.3,
    //        pin: true,
        ease: Power3.easeInOut
    });

//window.addEventListener('load', function() {
//    horScroll();
//    menuTrigger.addEventListener("click", menuNav);
//});

function checkWidth () {
    actualInnerWidth = document.body.clientWidth,
    console.log(actualInnerWidth);
}

window.addEventListener('resize', function() {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    checkWidth();
    
    if (newWidth > 1000) {
        console.log("This is good");
        } else {
    console.log("too small");
}
});

document.addEventListener('mousemove', function(e) {
    console.log(e.clientX);
    console.log(docBody);
    checkWidth();
    cursorOuter.setAttribute("style", "top: "+(e.clientY - 10 +"px; left: "+(e.clientX - 10)+"px;"));
    
    cursorInner.setAttribute("style", "top: "+(e.clientY - 4)+"px; left: "+(e.clientX - 4)+"px;");
    
    if (e.clientX > (actualInnerWidth - 10)) {
        cursorOuter.setAttribute("style", "width: 0px; height: 0px; opacity: 0;");
        cursorInner.setAttribute("style", "width: 0px; height: 0px; opacity: 0;");
        docBody.setAttribute("style", "cursor: normal;");
    } else {
        docBody.setAttribute("style", "cursor: none;");
    }
    
})

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
//    tl.to(".loading-screen", {
//        duration: 1,
//        width: "100%",
//        left: "0%",
//        ease: "Expo.easeOut",
//    });
//
//    tl.to(".loading-screen", {
//        duration: 1,
//        left: "100%",
//        width: "0%",
//        ease: "Expo.easeOut",
//        
//    });
//    
//    tl.to(".loading-screen", {
//        duration: 1,
//        width: "100%",
//        left: "0%",
//        ease: "Expo.easeInOut",
////        delay: 1
//    });
//    
//    tl.to(".loading-screen", {
//        duration: 1,
//        width: "0%",
//        left: "0%",
//        ease: "Expo.easeOut",
//    });
    
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
    
    setTimeout(function(){ window.scrollTo(0, 0); }, 1500);
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 1.2,
        y: 50,
        autoAlpha: 0,
//        delay: 0.2,
        stagger: 0.2,
        ease: Power2.easeInOut,
//        duration: 1,
//        yPercent: -50,
//        opacity: 0,
//        stagger: 0.3,
//        delay: 0.2,
//        ease: Power1.easeInOut
    });
    tl.from(".animate-svg", {
        duration: 1.2,
        width: 200,
        autoAlpha: 0,
        ease: Power2.easeOut,
    });
}

//("#one", 1, {x:-100},0)
//    .from("#two", 1, {x:-100},0)
//    .from("#three", 1, {x:-100},0)
//    .from("#four", 1, {x:100, autoAlpha:0})
//    .to("#box", 1, {x:100, autoAlpha:0})






//window.onload = () => {
//  const anchors = document.querySelectorAll('a');
//  const transition_el = document.querySelector('.transition');
//
//  setTimeout(() => {
//    transition_el.classList.remove('is-active');
//  }, 500);
//
//  for (let i = 0; i < anchors.length; i++) {
//    const anchor = anchors[i];
//
//    anchor.addEventListener('click', e => {
//      e.preventDefault();
//      let target = e.target.href;
//
//      console.log(transition_el);
//
//      transition_el.classList.add('is-active');
//
//      console.log(transition_el);
//
//      setInterval(() => {
//        window.location.href = target;
//      }, 500);
//    })
//  }
//}

window.addEventListener('load', function() {
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
    
//    for (let x = 0; x < animateIn.length; x++) {
//        const singleAnimateIn = animateIn[i];
//        
//        setTimeout(() => {
//            contentAnimation();
//        }, 600);
//    }
    
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        
        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;
            
            console.log(target);
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
});




//window.onload = () => {
//    const transition_el = document.querySelector('.transition');
//    
//    setTimeout(() => {
//        transition.el.classList.remove('is-active');
//    }, 500);
//}

const enteringItem = gsap.utils.toArray('.showEntering');

gsap.utils.toArray('.showEntering').forEach(enteringItem => {
  gsap.fromTo(enteringItem, {
      autoAlpha: 0, 
      y: 20,
      stagger: 0.2,
      ease: Power4.easeInOut,
    }, {
    scrollTrigger: {
      trigger: enteringItem,
      once: true
    },
    duration: 0.6, 
    autoAlpha: 1, 
    y: 0
  });
});

scrollButton.addEventListener("click", function() {
    gsap.to(window, {duration: 1, scrollTo:".scrollTo", ease:Power2.easeOut});
});

//scrollButton.addEventListener("click", function() {
//    gsap.to(window, {duration: 1, scrollTo:"#projectIntro", ease:Power2.easeOut});
//});

workButton.addEventListener("click", function() {
    gsap.to(window, {duration: 1.5, scrollTo:".scrollTo", scrollToease:Sine.easeInOut});
});

moreAbout.addEventListener("click", function() {
    gsap.to(window, {duration: 2, scrollTo:"#about", ease:Sine.easeInOut});
});