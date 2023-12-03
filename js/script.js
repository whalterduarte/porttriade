
//Menu
let header = document.querySelector('nav');
let navi = document.querySelector('ul');
let showsider = false;

function toogleSideBar(){
  showsider = !showsider
  if(showsider) {
    navi.style.marginLeft = '-0vw'
    navi.style.animationName = 'animacaoHeader';
  }
  else{
    navi.style.marginLeft = '-300vw'
    navi.style.animationName = '';
  }
}



//Menu delay ao acionado
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.navLink');

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetOffset = targetElement.offsetTop;
        const currentOffset = window.pageYOffset;
        const distance = targetOffset > currentOffset ? targetOffset - currentOffset : currentOffset - targetOffset;

        const duration = 1500; 
        const startTime = performance.now();

        function scrollToTarget(now) {
          const timeElapsed = now - startTime;
          window.scrollTo(0, easeInOut(timeElapsed, currentOffset, targetOffset - currentOffset, duration));

          if (timeElapsed < duration) {
            requestAnimationFrame(scrollToTarget);
          } else {
            window.scrollTo(0, targetOffset);
          }
        }

        function easeInOut(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollToTarget);
      }
    });
  });
});



//Div main HIDDEN apos chegar a certa altura
window.addEventListener("scroll", function() {
  var div = document.getElementById('main');
  var scrollPosition = window.scrollY;
  var thresholdDesktop = 400;
  var thresholdMobile = 500;

  if (window.innerWidth >= 768) {
    if (scrollPosition >= thresholdDesktop) {
      div.style.visibility = "hidden";
    } else {
      div.style.visibility = "visible";
    }
  } else { 
    if (scrollPosition >= thresholdMobile) {
      div.style.visibility = "hidden";
    } else {
      div.style.visibility = "visible";
    }
  }
});

//Transparencia no scroll
window.addEventListener("scroll", function() {
  var div = document.getElementById('main');
  var scrollPosition = window.scrollY;
  var scrollFactor = 0.002; 

  var newOpacity = 1 - (scrollPosition * scrollFactor);
  if (newOpacity < 0) newOpacity = 0; //

  div.style.opacity = newOpacity;
});



// Selecione o elemento com a classe .prproject
const prproject = document.querySelector('.prproject');

// Selecione o elemento com o id namePortProject
const namePortProject = document.getElementById('namePortProject');

// Adicione um ouvinte de evento para o evento mouseenter na div namePortProject
namePortProject.addEventListener('mouseenter', () => {
  // Defina o estilo visibility: hidden para a div com a classe .prproject
  prproject.style.visibility = 'hidden';
});

// Adicione um ouvinte de evento para o evento mouseleave na div namePortProject
namePortProject.addEventListener('mouseleave', () => {
  // Defina o estilo visibility: visible para a div com a classe .prproject para fazê-la reaparecer
  prproject.style.visibility = 'visible';
});
