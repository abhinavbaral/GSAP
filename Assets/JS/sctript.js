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

let tl = gsap.timeline();

tl.from("h2", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

tl.from("h4", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.5 
}); 
