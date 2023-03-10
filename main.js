const mobileButton = document.querySelector("#mobile-cta");
const nav = document.querySelector("nav");
const mobileButtonExit = document.querySelector("#mobile-exit");

      mobileButton.addEventListener("click", () => nav.classList.add("menu-btn"));

      mobileButtonExit.addEventListener("click", () => nav.classList.remove("menu-btn"));

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -60px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(
      entries,
      appearOnScroll
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);
    
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
    
    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    });