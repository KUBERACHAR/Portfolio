// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to nav links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#4facfe';
        }
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

var typed = new Typed('.typewriter-text', {
    strings: ['Web developer&nbsp;&nbsp;', 'Video editor&nbsp;&nbsp;', 'Programmer&nbsp;&nbsp;', 'Content Writer&nbsp;&nbsp;', 'Tech Supporter&nbsp;&nbsp;'],
    typeSpeed: 50,
    backSpeed: 50,
    fadeOut: false,
    loop: true,
});

window.addEventListener('load', () => {
    const introOverlay = document.getElementById('intro-overlay');
    if (!introOverlay) return;

    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        introOverlay.classList.add('intro-wipe');
    }, 2200);

    setTimeout(() => {
        introOverlay.style.opacity = '0';
        document.body.style.overflow = '';
    }, 3200);

    setTimeout(() => {
        introOverlay.remove();
    }, 3600);
});

// Modal section
// Bus Tracking System Modal
function openBus_tracking_system(){
    document.getElementById("myModal1").style.display="block";
}
function closeBus_tracking_system(){
    document.getElementById("myModal1").style.display="none";
}

// MS UI Modal
function openMS_UI(){
    document.getElementById("myModal2").style.display="block";
}
function closeMS_UI(){
    document.getElementById("myModal2").style.display="none";
}

// Gym Website Modal
function openGym(){
    document.getElementById("myModal3").style.display="block";
}
function closeGym(){
    document.getElementById("myModal3").style.display="none";
}

// Employee Tracker Modal
function openEmployee_Tracker(){
    document.getElementById("myModal4").style.display="block";
}
function closeEmployee_Tracker(){
    document.getElementById("myModal4").style.display="none";
}

// Bill Modal
function openBill(){
    document.getElementById("myModal5").style.display="block";
}
function closeBill(){
    document.getElementById("myModal5").style.display="none";
}

// Face Modal
function openFace(){
    document.getElementById("myModal6").style.display="block";
}
function closeFace(){
    document.getElementById("myModal6").style.display="none";
}

// Tic Tac Toe Modal
function openTic_tac_toe(){
    document.getElementById("myModal7").style.display="block";
}
function closeTic_tac_toe(){
    document.getElementById("myModal7").style.display="none";
}

// Tic Tac Toe Game Modal
function openTic_tac_toe_game(){
    document.getElementById("myModal8").style.display="block";
}
function closeTic_tac_toe_game(){
    document.getElementById("myModal8").style.display="none";
}

// Quiz Modal
function openQuiz(){
    document.getElementById("myModal9").style.display="block";
}
function closeQuiz(){
    document.getElementById("myModal9").style.display="none";
}

// Quiz Modal
function openCalculator(){
    document.getElementById("myModal10").style.display="block";
}
function closeCalculator(){
    document.getElementById("myModal10").style.display="none";
}

// Cursor Trail Effect
document.addEventListener('DOMContentLoaded', function() {
  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);
  
  // Initialize canvas
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Variables for particles
  const particles = [];
  const mouse = { x: 0, y: 0 };
  
  // Options (customizable)
  const options = {
    trailEffect: 'dots',
    particleCount: 44,
    particleSize: 10,
    particleColor: '#1999ee',
    fadeSpeed: 0.96
  };
  
  // Update mouse position on move
  document.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    // Add new particle
    particles.push({
      x: mouse.x,
      y: mouse.y,
      size: options.particleSize,
      alpha: 1
    });
    
    // Keep particles array at desired length
    if (particles.length > options.particleCount) {
      particles.splice(0, particles.length - options.particleCount);
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  // Animation loop
  function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw and update particles
    particles.forEach((particle, index) => {
      if (options.trailEffect === 'dots') {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * particle.alpha, 0, Math.PI * 2);
        ctx.fillStyle = `${options.particleColor}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      } else if (options.trailEffect === 'line') {
        if (index > 0) {
          const prevParticle = particles[index - 1];
          ctx.beginPath();
          ctx.moveTo(prevParticle.x, prevParticle.y);
          ctx.lineTo(particle.x, particle.y);
          ctx.strokeStyle = `${options.particleColor}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = particle.size * particle.alpha;
          ctx.stroke();
        }
      } else if (options.trailEffect === 'glow') {
        ctx.beginPath();
        const grd = ctx.createRadialGradient(
          particle.x, particle.y, 0, 
          particle.x, particle.y, particle.size * 2 * particle.alpha
        );
        grd.addColorStop(0, `${options.particleColor}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`);
        grd.addColorStop(1, `${options.particleColor}00`);
        ctx.fillStyle = grd;
        ctx.arc(particle.x, particle.y, particle.size * 2 * particle.alpha, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Update alpha
      particle.alpha *= options.fadeSpeed;
    });
    
    // Remove faded particles
    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i].alpha < 0.01) {
        particles.splice(i, 1);
      }
    }
    
    requestAnimationFrame(animate);
  }
  
  animate();
});