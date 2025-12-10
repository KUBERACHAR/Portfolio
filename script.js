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