// menu bar
document.addEventListener('DOMContentLoaded', function() {
    var subBtns = document.querySelectorAll('.sub-btn');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');
    var sideBar = document.querySelector('.side-bar');
    
    // Event listener for toggle sub menus
    subBtns.forEach(function(subBtn) {
      subBtn.addEventListener('click', function() {
        var subMenu = this.nextElementSibling;
        subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';
        this.querySelector('.dropdown').classList.toggle('rotate');
      });
    });
    
    // Event listener for expand and collapse the sidebar
    menuBtn.addEventListener('click', function() {
      sideBar.classList.add('active');
      menuBtn.style.visibility = 'hidden';
    });
    
    closeBtn.addEventListener('click', function() {
      sideBar.classList.remove('active');
      menuBtn.style.visibility = 'visible';
    });
  });


  

// Preloader
window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  const navbar = document.querySelector('.nav-bar');
  preload.classList.add('preload-finish');


  // var tl = gsap.timeline({Delay: 5});
  // tl.to("#navbar", {y: 0, duration: 1});
  // tl.to(".hero-content h1", {opacity:1, duration: 0.5});
  // tl.to(".hero-stats", {y:0, duration: 1});  
  // tl.to("#freepik--character-1--inject-4", {x:0, duration: 0.5}); 
  // tl.to("#freepik--character-2--inject-4", {x:0, duration: 0.5}); 
  // tl.to("#freepik--character-3--inject-4", {x:0, duration: 0.5}); 
  // tl.to("#freepik--character-4--inject-4", {x:0, duration: 0.5}); 

  




  // Counter hero section
  const updatedCounters = [
    { target: 60, elementId: "applicants-stats" },
    { target: 5, elementId: "projects-stats" },
    { target: 5, elementId: "articles-stats" }
  ];

  const updatedDuration = 3000; // The duration in milliseconds for the counter effect
  const updatedInterval = 100; // The interval in milliseconds between each count update

  function updatedEaseOutQuad(t) {
    return t * (2 - t);
  }

  setTimeout(() => {
    updatedCounters.forEach(updatedCounter => {
      let currentNumber = 0;
      const increment = updatedCounter.target / (updatedDuration / updatedInterval);
      const counterElement = document.getElementById(updatedCounter.elementId);

      const counterInterval = setInterval(() => {
        currentNumber += increment;
        const progress = updatedEaseOutQuad(currentNumber / updatedCounter.target);
        const currentValue = Math.ceil(progress * updatedCounter.target);

        if (currentValue >= updatedCounter.target) {
          clearInterval(counterInterval);
          currentNumber = updatedCounter.target;
        }

        counterElement.textContent = currentValue + "+";
      }, updatedInterval);
    });
  }, 3000); // Delay of 3 seconds

});

  