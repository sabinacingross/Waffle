const positiveSayings = [
    "You're an amazing brother! 👊",
    "Your siblings are lucky to have you! 💪",
    "Being there for your family makes you a great brother! 💖",
    "You have a heart of gold, brother! 🏆",
    "Your kindness toward your siblings is inspiring! ✨",
    "You make your siblings feel safe and loved! 🛡️",
    "Being a good brother is one of your greatest strengths! 👑",
    "Your siblings look up to you, keep shining! 🌟",
    "The bond you share with your siblings is precious! 💎",
    "You're the brother every sibling dreams of having! 🎯",
    "Your loyalty to your family is admirable! 🤝",
    "You inspire your siblings with your actions! 🚀",
    "Being protective and caring makes you an awesome brother! 💪",
    "Your family is better because you're in it! 🌈",
    "You set a great example for your siblings! 📈",
    "Your support means everything to your family! 💝",
    "Being patient with your siblings shows real love! 💗",
    "You're a role model to your brothers and sisters! 👨‍👦",
    "Your sense of humor brings joy to your family! 😄",
    "You have the power to make your siblings' day better! ☀️",
    "Being there through thick and thin makes you a true brother! 🔥",
    "Your family is proud to call you their brother! 🎊",
    "You understand your siblings like no one else! 🧠",
    "Your generosity with your siblings shows your true character! 🎁",
    "Being trustworthy is one of your best qualities! 🔐",
    "Your siblings feel safe around you! 🏠",
    "You make family moments unforgettable! 🎉",
    "Being a good listener makes you an amazing brother! 👂",
    "Your love for your family shines bright! ✨",
    "You're the best brother they could ask for! 👑"
];

const decorations = [
    drawRainbowFlowers,
    drawButterflies,
    drawHearts,
    drawSunAndClouds,
    drawFlowerGarden,
    drawRainbow,
    drawStars,
    drawMountains,
    drawFloatingBalloons,
    drawShimmeryDots
];

let lastSayingIndex = -1;

function drawRainbowFlowers() {
    const svg = document.getElementById('decorationSvg');
    svg.innerHTML = '';
    
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF69B4', '#FFB347'];
    
    for (let i = 0; i < 5; i++) {
        const x = 50 + i * 50;
        const petals = 6;
        
        for (let p = 0; p < petals; p++) {
            const angle = (p / petals) * Math.PI * 2;
            const px = x + Math.cos(angle) * 15;
            const py = 150 + Math.sin(angle) * 15;
            
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', px);
            circle.setAttribute('cy', py);
            circle.setAttribute('r', 12);
            circle.setAttribute('fill', colors[p % colors.length]);
            circle.style.animation = `float 3s ease-in-out infinite`;
            circle.style.animationDelay = `${i * 0.1 + p * 0.1}s`;
            svg.appendChild(circle);
        }
        
        const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        center.setAttribute('cx', x);
        center.setAttribute('cy', 150);
        center.setAttribute('r', 8);
        center.setAttribute('fill', '#FFD700');
        svg.appendChild(center);
    }
}

function drawButterflies() {
    const svg = document.getElementById('decorationSvg');
    svg.innerHTML = '';
    
    const colors = ['#FF69B4', '#00CEC9', '#A29BFE', '#FFD93D'];
    
    for (let i = 0; i < 3; i++) {
        const x = 60 + i * 80;
        const color = colors[i];
        
        // Left wing
        const leftWing = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        leftWing.setAttribute('cx', x - 15);
        leftWing.setAttribute('cy', 100 - i * 20);
        leftWing.setAttribute('rx', 18);
        leftWing.setAttribute('ry', 25);
        leftWing.setAttribute('fill', color);
        leftWing.style.animation = `flapWings 2s ease-in-out infinite`;
        leftWing.style.animationDelay = `${i * 0.3}s`;
        leftWing.style.transformOrigin = `${x}px ${100 - i * 20}px`;
        svg.appendChild(leftWing);
        
        // Right wing
        const rightWing = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        rightWing.setAttribute('cx', x + 15);
        rightWing.setAttribute('cy', 100 - i * 20);
        rightWing.setAttribute('rx', 18);
        rightWing.setAttribute('ry', 25);
        rightWing.setAttribute('fill', color);
        rightWing.style.animation = `flapWings 2s ease-in-out infinite`;
        rightWing.style.animationDelay = `${i * 0.3}s`;
        rightWing.style.transformOrigin = `${x}px ${100 - i * 20}px`;
        svg.appendChild(rightWing);
        
        // Body
        const body = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        body.setAttribute('cx', x);
        body.setAttribute('cy', 100 - i * 20);
        body.setAttribute('r', 5);
        body.setAttribute('fill', '#333');
        svg.appendChild(body);
    }
}

function drawHearts() {
    const svg = document.getElementById('decorationSvg');
    svg.innerHTML = '';
    
    const colors = ['#FF1493', '#FF69B4', '#FF6B6B', '#FFB6C1'];
    
    for (let i = 0; i < 4; i++) {
        const x = 40 + i * 65;
        const y = 60 + Math.sin(i) * 30;
        
        const heart = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        heart.setAttribute('d', `M ${x} ${y + 8} C ${x} ${y} ${x - 12} ${y - 12} ${x - 18} ${y - 6} C ${x - 18} ${y - 18} ${x - 6} ${y - 25} ${x} ${y - 10} C ${x + 6} ${y - 25} ${x + 18} ${y - 18} ${x + 18} ${y - 6} C ${x + 12} ${y - 12} ${x} ${y} ${x} ${y + 8}`);
        heart.setAttribute('fill', colors[i]);
        heart.style.animation = `pulse 1.5s ease-in-out infinite`;
        heart.style.animationDelay = `${i * 0.2}s`;
        svg.appendChild(heart);
    }
}

function drawSunAndClouds() {
    const svg = document.getElementById('decorationSvg');
    svg.innerHTML = '';
    
    // Sun
    const sun = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    sun.setAttribute('cx', '220');
    sun.setAttribute('cy', '60');
    sun.setAttribute('r', '20');
    sun.setAttribute('fill', '#FFD93D');
    sun.style.animation = `rotate 20s linear infinite`;
    svg.appendChild(sun);
    
    // Sun rays
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const x1 = 220 + Math.cos(angle) * 28;
        const y1 = 60 + Math.sin(angle) * 28;
        const x2 = 220 + Math.cos(angle) * 38;
        const y2 = 60 + Math.sin(angle) * 38;
        
        const ray = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ray.setAttribute('x1', x1);
        ray.setAttribute('y1', y1);
        ray.setAttribute('x2', x2);
        ray.setAttribute('y2', y2);
        ray.setAttribute('stroke', '#FFD93D');
        ray.setAttribute('stroke-width', '3');
        ray.setAttribute('stroke-linecap', 'round');
        ray.style.animation = `rotate 20s linear infinite`;
        svg.appendChild(ray);
    }
    
    // Cloud
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', 50 + i * 150 + j * 20);
            circle.setAttribute('cy', 140 + i * 40);
            circle.setAttribute('r', '18');
            circle.setAttribute('fill', '#ffffff');
            circle.style.opacity = '0.8';
            circle.style.animation = `float 4s ease-in-out infinite`;
            circle.style.animationDelay = `${i * 0.5 + j * 0.1}s`;
            svg.appendChild(circle);
        }
    }
}

function drawFlowerGarden() {
    const svg = document.getElementById('decorationSvg');
    svg.innerHTML = '';
    
    const flowerPositions = [
        { x: 40, y: 140, color: '#FF6B6B' },
        { x: 100, y: 150, color: '#FFD93D' },
        { x: 160, y: 145, color: '#6BCB77' },
        { x: 220, y: 155, color: '#A29BFE' },
        { x: 260, y: 140, color: '#FF69B4' }
    ];
    
    flowerPositions.forEach((flower, i) => {
        // Stem
        const stem = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        stem.setAttribute('x1', flower.x);
        stem.setAttribute('y1', flower.y - 40);
        stem.setAttribute('x2', flower.x);
        stem.setAttribute('y2', flower.y);
        stem.setAttribute('stroke', '#6BCB77');
        stem.setAttribute('stroke-width', '3');
        svg.appendChild(stem);
        
        // Petals
        for (let p = 0; p < 6; p++) {
            const angle = (p / 6) * Math.PI * 2;
            const px = flower.x + Math.cos(angle) * 12;
            const py = flower.y - 40 + Math.sin(angle) * 12;
            
            const petal = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            petal.setAttribute('cx', px);
            petal.setAttribute('cy', py);
            petal.setAttribute('r', '8');
            petal.setAttribute('fill', flower.color);
            petal.style.animation = `sway 3s ease-in-out infinite`;
            petal.style.animationDelay = `${i * 0.2 + p * 0.1}s`;
            svg.appendChild(petal);
        }
        
        // Center
        const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        center.setAttribute('cx', flower.x);
        center.setAttribute('cy', flower.y - 40);
        center.setAttribute('r', '6');
        center.setAttribute('fill', '#FFD700');
        svg.appendChild(center);
    });
}

function drawRainbow() {
    const svg = document.getElementById('decorationSvg');
    svg.innerHTML = '';
    
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#A29BFE', '#FF69B4'];
    
    for (let i = 0; i < colors.length; i++) {
        const arc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        arc.setAttribute('cx', '150');
        arc.setAttribute('cy', '150');
        arc.setAttribute('r', 50 - i * 8);
        arc.setAttribute('fill', 'none');
        arc.setAttribute('stroke', colors[i]);
        arc.setAttribute('stroke-width', '12');
        arc.style.animation = `fadeInOut 3s ease-in-out infinite`;
        arc.style.animationDelay = `${i * 0.1}s`;
        svg.appendChild(arc);
    }
}

function drawStars() {
    const svg = document.getElementById('decorationSvg');
    svg.innerHTML = '';
    
    const starCount = 12;
    const colors = ['#FFD700', '#FFE135', '#FFF44F', '#FFEB3B', '#FDD835'];
    
    for (let i = 0; i < starCount; i++) {
        const angle = (i / starCount) * Math.PI * 2;
        const x = 150 + Math.cos(angle) * 80;
        const y = 100 + Math.sin(angle) * 80;
        
        const star = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const points = [];
        for (let p = 0; p < 5; p++) {
            const starAngle = (p / 5) * Math.PI * 2 - Math.PI / 2;
            const radius = p % 2 === 0 ? 12 : 5;
            points.push([x + Math.cos(starAngle) * radius, y + Math.sin(starAngle) * radius]);
        }
        star.setAttribute('points', points.map(p => p.join(',')).join(' '));
        star.setAttribute('fill', colors[i % colors.length]);
        star.style.animation = `twinkle 2s ease-in-out infinite`;
        star.style.animationDelay = `${i * 0.15}s`;
        svg.appendChild(star);
    }
}

function drawMountains() {
    const svg = document.getElementById('decorationSvg');
    svg.innerHTML = '';
    
    // Sky
    const sky = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    sky.setAttribute('width', '300');
    sky.setAttribute('height', '120');
    sky.setAttribute('fill', '#87CEEB');
    svg.appendChild(sky);
    
    // Mountains
    const mountains = [
        { points: '0,120 80,50 160,120', color: '#8B7355' },
        { points: '120,120 180,60 240,120', color: '#A0826D' },
        { points: '200,120 260,70 300,120', color: '#9B8B7E' }
    ];
    
    mountains.forEach((mountain, i) => {
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', mountain.points);
        polygon.setAttribute('fill', mountain.color);
        polygon.style.animation = `float 5s ease-in-out infinite`;
        polygon.style.animationDelay = `${i * 0.3}s`;
        svg.appendChild(polygon);
    });
    
    // Snow peaks
    const snowPeaks = [
        { points: '80,50 90,65 70,65', color: '#ffffff' },
        { points: '180,60 190,80 170,80', color: '#ffffff' },
        { points: '260,70 270,90 250,90', color: '#ffffff' }
    ];
    
    snowPeaks.forEach((peak) => {
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', peak.points);
        polygon.setAttribute('fill', peak.color);
        svg.appendChild(polygon);
    });
}

function drawFloatingBalloons() {
    const svg = document.getElementById('decorationSvg');
    svg.innerHTML = '';
    
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF69B4'];
    
    for (let i = 0; i < 5; i++) {
        const x = 50 + i * 50;
        
        // String
        const string = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        string.setAttribute('x1', x);
        string.setAttribute('y1', 60);
        string.setAttribute('x2', x - 5);
        string.setAttribute('y2', 120);
        string.setAttribute('stroke', '#999');
        string.setAttribute('stroke-width', '1');
        svg.appendChild(string);
        
        // Balloon
        const balloon = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        balloon.setAttribute('cx', x);
        balloon.setAttribute('cy', 60);
        balloon.setAttribute('r', '15');
        balloon.setAttribute('fill', colors[i]);
        balloon.style.animation = `float 4s ease-in-out infinite`;
        balloon.style.animationDelay = `${i * 0.2}s`;
        svg.appendChild(balloon);
        
        // Highlight
        const highlight = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        highlight.setAttribute('cx', x - 4);
        highlight.setAttribute('cy', 55);
        highlight.setAttribute('r', '4');
        highlight.setAttribute('fill', '#ffffff');
        highlight.style.opacity = '0.6';
        svg.appendChild(highlight);
    }
}

function drawShimmeryDots() {
    const svg = document.getElementById('decorationSvg');
    svg.innerHTML = '';
    
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#A29BFE', '#FF69B4'];
    
    for (let i = 0; i < 30; i++) {
        const x = Math.random() * 300;
        const y = Math.random() * 200;
        const size = Math.random() * 3 + 2;
        
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', x);
        dot.setAttribute('cy', y);
        dot.setAttribute('r', size);
        dot.setAttribute('fill', colors[i % colors.length]);
        dot.style.animation = `shimmer 2s ease-in-out infinite`;
        dot.style.animationDelay = `${Math.random() * 2}s`;
        svg.appendChild(dot);
    }
}

document.getElementById('sayingBtn').addEventListener('click', function() {
    const sayingBox = document.getElementById('sayingBox');
    const sayingElement = document.getElementById('saying');
    
    // Get a random saying different from the last one
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * positiveSayings.length);
    } while (newIndex === lastSayingIndex && positiveSayings.length > 1);
    
    lastSayingIndex = newIndex;
    
    // Remove animation class
    sayingBox.style.animation = 'none';
    
    // Trigger reflow to restart animation
    void sayingBox.offsetWidth;
    
    // Update saying with animation
    sayingElement.textContent = positiveSayings[newIndex];
    sayingBox.style.animation = 'slideIn 0.5s ease';
    
    // Draw a random decoration
    const randomDecoration = decorations[Math.floor(Math.random() * decorations.length)];
    randomDecoration();
    
    // Create celebration effect
    createCelebration();
});

function createCelebration() {
    const celebration = document.querySelector('.waffle-cat');
    
    // Add extra wobble
    celebration.style.animation = 'none';
    void celebration.offsetWidth;
    celebration.style.animation = 'wiggle 0.6s ease-in-out';
    
    // Create floating emojis
    const emojis = ['🎉', '✨', '💖', '🌈', '🎊', '⭐', '💫', '🎈'];
    for (let i = 0; i < 5; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.top = '50%';
        emoji.style.fontSize = '2rem';
        emoji.style.zIndex = '20';
        emoji.style.pointerEvents = 'none';
        emoji.style.animation = `celebrateFloat 2s ease-out forwards`;
        
        document.body.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 2000);
    }
}

// Add celebrate animation to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrateFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) scale(0.3) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Trigger initial saying on page load
window.addEventListener('load', function() {
    const sayingBox = document.getElementById('sayingBox');
    sayingBox.style.animation = 'slideIn 0.5s ease';
    
    // Draw initial decoration
    const randomDecoration = decorations[Math.floor(Math.random() * decorations.length)];
    randomDecoration();
});
