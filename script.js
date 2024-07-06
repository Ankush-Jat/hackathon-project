// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('.wrapper'),
  smooth: true,
  scrollFromAnywhere: true,
  resetNativeScroll: true
});



//  loading screen


function pageAnimation(){
  var tl = gsap.timeline();

tl.from (".loader-shery span", {
  delay:0.5,
  x:40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
  ease:"linear",
})
tl.from (".loader-content-top", {
  y:50,
  duration:0.4,
  opacity: 0,
  ease: "linear"
})
tl.from (".loader-content-bottom h3", {
  y:50,
  duration:0.4,
  opacity: 0,
  ease: "linear"
})
tl.from (".loader-content-bottom h4", {
  y:50,
  duration:0.4,
  opacity: 0,
  ease: "linear"
})
tl.from (".loader-content-bottom span", {
  y:50,
  duration:0.4,
  opacity: 0,
  stagger: 0.2,
  ease: "linear"
})
tl.to(".loader", {
  delay:0.5,
  opacity:0,
  duration:1.5
})
tl.to(".loader", {
  display:"none"
})

// for website loadng

tl.from('.nav-logo', {
  y:-30,
  opacity:0,
  duration:0.5,
  ease:'power1.inOut'
},'-=1')
tl.from('.nav-icons', {
  y:-30,
  opacity:0,
  duration:0.4,
  ease:'power1.inOut'
})
tl.from('.nav-text div', {
  y:-30,
  opacity:0,
  duration:0.4,
  stagger:0.1,
  ease:'power1.inOut'
})
tl.from('.hero-bg',{
  y:-300,
  opacity:0,
  duration:0.4,
  ease:'in-out'
})
tl.from(".hero-responsive h1", {
  x:-50,
  opacity:0,
  duration:0.2,
})
tl.from(".hero-responsive p", {
  x:-50,
  opacity:0,
  duration:0.2,
  ease:'power1.inOut'
})
tl.from(".hero-responsive button", {
  x:-50,
  opacity:0,
  duration:0.2,
  ease:'power1.inOut'
})
}
// pageAnimation()









const animatedImages = document.querySelectorAll("#animate img");

function updateImagePositions(scrollPosition) {
  animatedImages.forEach((image, index) => {
    const speed = 0.1 + (index * 0.05); 
    const yPos = scrollPosition * speed;
    image.style.transform = `translateY(${yPos}px)`;
  });
}

// Scroll event listener
scroll.on('scroll', function (instance) {
  updateImagePositions(instance.scroll.y);
});

document.getElementById('scrollToTopBtn').addEventListener('click', function(e) {
  e.preventDefault();
  
  scroll.scrollTo('top', {
    duration: 2000,
    easing: [0.25, 0.1, 0.25, 1],
    callback: () => {
      animatedImages.forEach(image => {
        image.style.transform = 'translateY(0)';  
      });
    }
  });
});

scroll.on('call', 'resetImagePositions', () => {
  animatedImages.forEach(image => {
    image.style.transform = 'translateY(0)';
  });
});

const cardSwiper = new Swiper(".mySwiper", {
  slidesPerView: 2.3,
  spaceBetween: 10,
  freeMode: true,
});

const categorySwiper = new Swiper(".mySwiper-2", {
  slidesPerView: 3.7,
  spaceBetween: 10,
  freeMode: true,
});






document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const nsvSlide = document.querySelector(".nsvslide");
  const slideContents = document.querySelectorAll(".nsvslide-content");
  let timeout;

  function showSlide(event) {
    clearTimeout(timeout);
    const slideId = event.target.getAttribute("data-slide");
    
    slideContents.forEach((content) => {
      content.style.display = content.id === `${slideId}-content` ? "block" : "none";
    });
    
    nsvSlide.classList.add("active");
  }

  function hideSlide() {
    timeout = setTimeout(() => {
      nsvSlide.classList.remove("active");
    }, 200);
  }

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", showSlide);
    item.addEventListener("mouseleave", hideSlide);
  });

  nsvSlide.addEventListener("mouseenter", () => clearTimeout(timeout));
  nsvSlide.addEventListener("mouseleave", hideSlide);
});

window.addEventListener('resize', () => {
  scroll.update();
});

window.addEventListener('load', () => {
  scroll.update();
});













//  Animation for full website in GSAP and ScrollTrogger



var tl = gsap.timeline();

