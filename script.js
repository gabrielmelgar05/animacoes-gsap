window.addEventListener("load", () => {

  const tl = gsap.timeline();

  tl.to(".logo", {
    opacity:1,
    duration:1
  })

  .to(".logo", {
    scale:1.1,
    duration:1,
    repeat:1,
    yoyo:true
  })

  .to(".preloader", {
    y:"-100%",
    duration:1,
    ease:"power4.inOut"
  })

  .to(".site-content", {
    opacity:1,
    duration:1
  }, "-=0.5");

});
