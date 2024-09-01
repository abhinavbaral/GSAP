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


let Path = "M 10 100 Q 500 100 1000 100";
let finalPath = "M 10 100 Q 500 100 1000 100";

const string = document.querySelector("#curve");
string.addEventListener("mousemove", function(e) {
  let Path = `M 10 100 Q ${e.x} ${e.y} 1000 100`;

 
  
  gsap.to("svg path", {
    attr: { d: Path },
     duration: 1.5, 
    ease: "power3.out"
  });
});

string.addEventListener("mouseleave", function() {
 
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.5, 
    ease: "elastic.out(1, 0.5)"
  });
  });
