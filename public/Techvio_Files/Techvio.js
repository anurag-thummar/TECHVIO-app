// --loader--
window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});



console.clear();
let am = 60;

let btn = document.querySelector(".btn-particle");
let btnEl = document.querySelector(".btn-particle").getBoundingClientRect();
let xCenter = (btnEl.left + btnEl.right) / 2;
let yCenter = (btnEl.top + btnEl.bottom) / 2;


window.addEventListener('resize', function(event) {  
	 btn = document.querySelector(".btn-particle");
	 btnEl = document.querySelector(".btn-particle").getBoundingClientRect();
	 xCenter = (btnEl.left + btnEl.right) / 2;
	 yCenter = (btnEl.top + btnEl.bottom) / 2;
}, true);

btn.addEventListener("mouseup", (e) => {
    let xx = xCenter;
    let yy = yCenter;

    for (let i = 0; i < am; i++) {
        createCircles(xx, yy, 30);
    }
});

btn.addEventListener("mousedown", () => {
    let particles = document.querySelectorAll("particle");
    
    if (particles.length > 0) {
        particles.forEach((part) => {
            part.remove();
        });
    }
});

function createCircles(x, y, tuSam) {
    let particle = document.createElement("particle");

    document.body.appendChild(particle);

    // let size = Math.floor(Math.random() * 15);
    let size = Math.floor(Math.random() * 10);

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    let destinationX = x + (Math.random() - 0.5) * tuSam * 9;
    let destinationY = y + (Math.random() - 0.5) * tuSam * 9;

    let roate = (Math.random() + 1) * tuSam * 20;

    let animation = particle.animate(
        [
            {
                transform: `translate3d(${x - tuSam}px, ${y - tuSam}px, 0)`,
                opacity: 1
            },
            {
                transform: `translate3d(${destinationX - size}px, ${
                    destinationY - size
                }px, 0)  translateX(${tuSam}px)`,
                opacity: 1
            },
            {
                transform: `translate3d(${destinationX}px, ${destinationY}px, 0) rotateZ(${roate}deg)  translateX(${tuSam}px)`,
                opacity: 0
            }
        ],
        {
            duration: 10 + Math.random() * 2000,
            easing: "ease-out",

            delay: Math.random() * 200
        }
    );

    animation.onfinish = () => {
        particle.remove();
    };
}

// Theme button bubbles -----Finish-----//




// Particle-button -----start-----//
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },500);
  };
  
  var particleButtons = document.getElementsByClassName("particle-button");
  
  for (var i = 0; i < particleButtons.length; i++) {
    particleButtons[i].addEventListener('click', animateButton, false);
    particleButtons[i].addEventListener('mousedown', animateButton, false);
  }

// Particle-button -----end-----//










var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink"
select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  container = select('.container'),
  mainSVG = select('.mainSVG'),
  waveyPath = select('#waveyPath'),
  pop = select('#pop'),
  follower = select('#follower'),
  movingPath = select('#movingPath'),
  jumpingLorry = select('#jumpingLorry'),
  movingLorry = select('#movingLorry'),
  lorryGroup = select('#lorryGroup'),
  particleContainer = select('#particleContainer'),
  //particleTypeArray = ['#flake1', '#flake2', '#flake3', '#star','#heart'],
  particleTypeArray = ['#bubble', '#heart'],
  particleColorArray = ['#F3F1E2', '#B51541'],
  particlePool = [],
  popPool = [],
  numParticles = 270,
  particleCount = 0

//center the container cos it's pretty an' that
TweenMax.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})
TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set(lorryGroup, {
  transformOrigin: '50% 100%'
})
TweenMax.set(jumpingLorry, {
  transformOrigin: '50% 50%',
  rotation: 0
})
TweenMax.set(follower, {
  x: 0,
  y: 0
})
TweenMax.set(pop, {
  alpha:0
  
})
var waveyPathBezier = MorphSVGPlugin.pathDataToBezier(waveyPath.getAttribute('d'), {
  offsetX: -(lorryGroup.getBBox().width / 2),
  offsetY: -(lorryGroup.getBBox().height) - waveyPath.getAttribute('stroke-width')
})

var tl = new TimelineMax({
  repeat: -1,
  onUpdate: playParticle
});
tl.to(lorryGroup, 6, {
    bezier: {
      type: "cubic",
      values: waveyPathBezier,
      autoRotate: true
    },
    ease: Linear.easeNone
  })
  .to([movingPath, movingLorry], 6, {
    x: -1200,
    ease: Linear.easeNone
  }, '-=6')

var jumpTl = new TimelineMax();
jumpTl.to(lorryGroup, 0.16, {
  //y:-6,
  scaleY: 0.97,
  scaleX: 1.03,
  repeat: -1,
  ease: Linear.easeNone,
  yoyo: true
})

function createParticlePool() {

  var i = numParticles,
    p, popClone;
  while (--i > -1) {

    p = document.createElementNS(xmlns, 'use');
    popClone = pop.cloneNode(true);
    //pop.setAttributeNS(xlinkns, "xlink:href", '#pop');
    p.setAttributeNS(xlinkns, "xlink:href", particleTypeArray[i % particleTypeArray.length]);
    follower.appendChild(p);
    follower.appendChild(popClone);

    p.setAttributeNS(null, 'stroke', particleColorArray[i % particleColorArray.length]);
    //popClone.setAttributeNS(null, 'opacity', 1);
    //p.setAttribute('class', "particle");
    particlePool.push(p);
    popPool.push(popClone);
    TweenMax.set([p, popClone], {
      transformOrigin: '50% 50%',
      alpha:1,
      x:-100,
      y:-100
        //x:300,
        //y:follower._gsTransform.y
    })
    
    
    TweenMax.set([p], {
      scale: 0
    })

  }

}

//ScrubGSAPTimeline(tl);

function playParticle() {
  //console.log(particleCount%250 == 1)

  if (particleCount % 13) {
    particleCount++;
    checkParticleCount();
    return;
  }

  var p = particlePool[particleCount];
  TweenMax.set(p, {
    x: 260,
    y: lorryGroup._gsTransform.y + 12,
    //scale:0,
    alpha: 1
  })

  var s = randomBetween(5, 10) / 10;
  TweenMax.to(p, 0.46, {
    scaleX: s,
    ease: Elastic.easeOut.config(1, 0.83)
  })
  TweenMax.to(p, 0.6, {
    scaleY: s,
    ease: Elastic.easeOut.config(1, 0.4)
  })
  TweenMax.to(p, randomBetween(1, 2), {
    //paused:true,
    physics2D: {
      velocity: randomBetween(30, 165),
      angle: randomBetween(-180, -160),
      gravity: randomBetween(-130, -17)
    },
    onComplete: function(p) {
      TweenMax.set(p, {
        scale: 0
      })

      createPop(p);
    },
    onCompleteParams: [p]
  });

  particleCount++;

  checkParticleCount();
}

function createPop(p) {

  var popTl = new TimelineMax(),
    popClone = popPool[particleCount],
    popLines = popClone.getElementsByTagName('line'),
    popCircle = popClone.getElementsByTagName('circle');
  TweenMax.set(popClone, {
    x: p._gsTransform.x - 10,
    y: p._gsTransform.y - 10,
    rotation: 45
  })

  TweenMax.set(popCircle, {
    alpha: 1,
    attr: {
      r: 0
    }
  })
  popTl.set(popLines, {
      drawSVG: '0% 0%'

    })
    .to(popLines, 0.3, {
      drawSVG: '0% 20%',
      ease: Linear.easeNone
    })
    .to(popLines, 0.6, {
      drawSVG: '80% 100%',
      ease: Linear.easeNone
    })
    .to(popLines, 0.2, {
      drawSVG: '105% 105%',
      ease: Linear.easeNone
    })
    .to(popClone, 1, {
      x: '-=20',
      y: '-=20',
      scale: 0.5,
      ease: Linear.easeNone
    }, '-=' + popTl.duration())
    .to(popCircle, 1, {
      attr: {
        r: 6
      },
      alpha: 0,
      ease: Expo.easeOut
    }, '-=' + popTl.duration());

  popTl.timeScale(1.6)
}

function checkParticleCount() {
  particleCount = (particleCount >= numParticles) ? 0 : particleCount;
}

tl.timeScale(1);
createParticlePool();
 //ScrubGSAPTimeline(tl);
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// Function to show the "See Full Section" button when the contact section is 50% in view
function observeSection() {
  const contactSection = document.querySelector('.contact-section');
  const seeFullSectionButton = document.getElementById('see-full-section');
  const contactDownInner = document.querySelector('.contact-down-inner');

  // IntersectionObserver to detect when the contact section is 50% visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        seeFullSectionButton.style.display = 'block'; // Show the button
      } else {
        seeFullSectionButton.style.display = 'none'; // Hide the button when out of view
      }
    });
  }, {
    threshold: 0.5 // Trigger the observer when 50% of the section is visible
  });

  observer.observe(contactSection);

  // Function to reveal the full contact section when the button is clicked
  seeFullSectionButton.addEventListener('click', () => {
    contactDownInner.classList.add('show'); // Show the hidden content
    seeFullSectionButton.style.display = 'none'; // Hide the button after click
  });
}

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', observeSection);







// // Define the intersection observer
// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // When the .about-section is in view, trigger animations
//       const skillProgress90 = document.querySelector('.skill-progress90');
//       const skillProgress75 = document.querySelector('.skill-progress75');
//       const skillProgress85 = document.querySelector('.skill-progress85');
      
//       // Add animation by changing the width
//       skillProgress90.style.width = '90%';
//       skillProgress75.style.width = '75%';
//       skillProgress85.style.width = '85%';
      
//       // Stop observing after animation starts
//       observer.unobserve(entry.target);
//     }
//   });
// }, {
//   threshold: 0.5 // Trigger when 50% of the element is visible
// });

// // Start observing the .about-section
// const aboutSection = document.querySelector('.about-section');
// observer.observe(aboutSection);







/* <div class="creative-shape-div">
            <img class="bottom-creative-shape" src="./ASSETS/home-bottom-shape.png" />
          </div>

          <div class="color-div">

          </div>
          particles.js container
          

          particles.js lib - https://github.com/VincentGarreau/particles.js */