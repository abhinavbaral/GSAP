// gsap.to("#box1", {
//   x: 1500,
//   duration: 1.5,
//   delay: 1,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box2", {
//   x: 1500,
//   duration: 1.5,
//   delay: 1,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box3", {
//   x: 1500,
//   duration: 1.5,
//   delay: 1,
//   repeat: -1,
//   yoyo: true,
// });

// navbar items
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

gsap.from("#PG1 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360
});

gsap.from("#PG2 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
  scrollTrigger:{
    trigger:"#PG2 #box",
    scroller: "body",
    markers:true
  }
});

gsap.from("#PG3 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
  scrollTrigger:{
    trigger:"#PG3 #box",
    scroller: "body",
    markers:true
  }
});
