

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(".w-1 h1",1, 
  {
    fontSize: "8vw",
    zIndex:0,
/*     position: "static",
 */  },{
    zIndex:1000,
    fontSize: "2vw",
    position: "fixed",
    top:"28px",
    left:"40%", 
    ease: "power1.out",
    duration: 1,
  scrollTrigger: {
    trigger: ".w-1",
    start: "bottom 90%",
    end: "80% 50%",
    scrub: 1,
    markers: {startColor: "red", endColor: "red", fontSize: "16px", fontWeight: "bolder", indent: 20},
    id: "scrub"
  }
});
gsap.to(".cover_background-h1",1, {
    opacity: 0,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".cover_background-frame-wrapper",
      start: "top 70%",
      end: "80% 70%",
      scrub: 1,
/*       markers: true, */
      id: "scrub"
    }
  });

  gsap.fromTo(".cover_background-image",
  {
    scale:1.2,
  },{
    scale:1,
    ease: "power1.in",
    duration: 1,
    scrollTrigger: {
      trigger: ".cover_background-frame-wrapper",
      start: "top 70%",
      end: "30% 70%",
      scrub: 1,
/*       markers: {startColor: "white", endColor: "white", fontSize: "20px", fontWeight: "bold", indent: 20},
 */      id: "scrub",}
    },"-=1"
  );


  gsap.from(".padding-section-large h1",0.5, {
    x:-200,
    opacity:0,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".cover_background-frame-wrapper",
      start: "top 75%",
      end: "80% 70%",
      scrub: 1,
/*       markers: {startColor: "green", endColor: "green", fontSize: "24px"},
 */      id: "scrub"
    }
  });

  gsap.to(".cover_background-h1",1, {
    opacity: 0.9,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".cover_background-frame-wrapper",
      start: "80% 20%",
      end: "bottom 5%",
      scrub: 1,
/*       markers: true,
 */      id: "scrub"
    }
  });

