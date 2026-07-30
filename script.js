// Typewriter Effect for Apology
const apologyText = `I know I messed up. I promised we'd watch Odyssey together, and I went ahead and watched it alone. That wasn't just about a movie — it was about sharing something with you, about waiting for each other, about choosing "us time."

I broke that trust, and I'm truly sorry. You deserved to experience that story with me, to laugh at the same moments, to theories together, to have that memory.

I can't undo it. But I can promise I'll never make you feel left out again. Your company is the best part of any experience — and I forgot that for a moment. I won't forget again.`;

let charIndex = 0;
const typewriterElement = document.getElementById('typewriter');
let typingStarted = false;

function typeWriter() {
    if (charIndex < apologyText.length) {
        if (apologyText.charAt(charIndex) === '\n') {
            typewriterElement.innerHTML += '<br><br>';
        } else {
            typewriterElement.innerHTML += apologyText.charAt(charIndex);
        }
        charIndex++;
        setTimeout(typeWriter, 30 + Math.random() * 20);
    }
}

// Start typing when button is clicked
document.getElementById('forgiveBtn').addEventListener('click', function() {
    if (!typingStarted) {
        typingStarted = true;
        this.style.display = 'none';
        typewriterElement.innerHTML = '';
        charIndex = 0;
        typeWriter();
    }
});

// Floating Hearts
function createHeart() {
    const heartsContainer = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['❤️', '💖', '💕', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 800);

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Add reveal class to sections
document.querySelectorAll('.gallery-item, .reason-card, .promise-box').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Lightbox
function openLightbox(element) {
    const img = element.querySelector('img');
    const caption = element.querySelector('.gallery-caption');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImg.src = img.src;
    lightboxCaption.textContent = caption ? caption.textContent : '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Escape key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// Forgive Button Interactions
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const surpriseMessage = document.getElementById('surpriseMessage');

btnYes.addEventListener('click', () => {
    surpriseMessage.classList.add('active');
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
    
    // Celebration hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 100);
    }
});

// Make "No" button run away when hovered (playful)
btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
});

btnNo.addEventListener('mouseleave', () => {
    setTimeout(() => {
        btnNo.style.transform = 'translate(0, 0)';
    }, 1000);
});
