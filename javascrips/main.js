const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

gsap.from(".nav-links-anim", {
  duration: 2,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "elastic",
  force3D: true,
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const animation = document.querySelector(".start-new");
animation.addEventListener("click", () => {
  animationImages();
});
function animationImages() {
  const tl = new TimelineMax({});
  tl.from(".group-7", 1.5, { scaleX: 5, opacity: 0, ease: Elastic }, 0.5);
  tl.from(".group-10", 1.5, { scaleX: 0, opacity: 1 }, "-= 2");
  tl.from(".group-9", 1.5, { scaleY: 1, opacity: 0 }, "-= 1");
  tl.from(".group-5", 1.5, { scaleX: 0, opacity: 1 }, "-= 2");
  tl.from(".group-8", 1.5, { scaleY: 1, opacity: 1 }, "-= 2");
  tl.from(".PRODUCT", 1.5, { scaleX: 0, opacity: 1 }, "-= 2");
  tl.from(".sale", 1.5, { scaleY: 0, opacity: 1 }, "-= 1");
  tl.from(".cart", 1.5, { height: 100, opacity: 0 }), "-= 2";
  tl.from(".safe", 1.5, { scale: 0, opacity: 1 }), "-= 5";
}
const t2 = new TimelineMax({});
t2.to(".landing-images", 1, {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: Power2,
  reverse: true,
}).to(".main-content", 1, { y: 50, opacity: 0 }, "=- 1"); // want this to happend after scroll

// We use scroll magic here

const controller = new ScrollMagic.Controller();

// Creating scene for scroll magic

const scene = new ScrollMagic.Scene({
  triggerElement: ".header-main",
  triggerHook: "onLeave",
  duration: 500,
})
  .setPin(".header-main")
  .setTween(t2)
  .addTo(controller);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to(".eclip32", {
  duration: 1,
  ease: "power1.inOut",
  opacity: 0,
  motionPath: {
    path: [
      { x: 70, y: 100 },
      { x: 100, y: 250 },
      { x: 300, y: 350 },
      { x: 400, y: 200 },
      { x: 500, y: 100 },
      { x: 540, y: 265 },
      { x: 824, y: 258 },
    ], // you probably want more points here...or just use an SVG <path>!
    curviness: 0.5,

    autoRotate: false,
  },
});

const controllerTwo = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".develop-global",
  triggerHook: "onLeave",
  duration: 2000,
})
  .setPin(".develop-global")
  .setTween(tween)
  .addTo(controllerTwo);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
