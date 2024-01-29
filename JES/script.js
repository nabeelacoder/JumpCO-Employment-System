gsap.fromTo(
    ".loading-screen",
    {opacity:1},
    {
    opacity:0,
    duration:1.5,
    delay:3.5,
    }
);

gsap.fromTo(".name-container", {
    y:50,
    opacity:0
},{
    y:0,
    opacity:1,
    duration:2,
    delay:4,
})