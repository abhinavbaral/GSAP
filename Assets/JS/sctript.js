// GSAP for navbar items
let tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

tl.from("ul", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

// Curve Line like spring effect deko 
const string = document.querySelector("#curve");
let initialPath = "M 10 100 Q 500 100 1000 100";
let currentPath = initialPath;
string.addEventListener("mousemove", function(e) {
  currentPath = `M 10 100 Q ${e.x} ${e.y} 1000 100`
  gsap.to("svg path", {
    attr: { d: currentPath },
    duration: 0.5,
    ease: "power3.out"
  });
});


string.addEventListener("mouseleave", function() {
  gsap.to("svg path", {
    attr: { d: initialPath
     },
    duration: 1.5,
    ease: "elastic.out(1, 0.75)" 
  });
});
