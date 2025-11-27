
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});


const lid = document.getElementById('lid');
const cat = document.getElementById('cat');
const openBtn = document.getElementById('openBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');

openBtn.addEventListener('click', () => {
    
    lid.classList.add('open');
    
    
    const isAlive = Math.random() > 0.5;
    
    
    setTimeout(() => {
        if (isAlive) {
            cat.textContent = '😺';
            result.textContent = 'Кот жив! Радиоактивный атом не распался.';
            result.style.color = '#4caf50';
        } else {
            cat.textContent = '💀';
            result.textContent = 'Кот мёртв. Радиоактивный атом распался и активировал механизм.';
            result.style.color = '#f44336';
        }
        
        
        openBtn.disabled = true;
    }, 1500);
});

resetBtn.addEventListener('click', () => {
    
    lid.classList.remove('open');
    
    
    setTimeout(() => {
        cat.textContent = '😺';
        result.textContent = 'Кот находится в суперпозиции - одновременно и жив, и мёртв.';
        result.style.color = '#fff';
        
        
        openBtn.disabled = false;
    }, 500);
});


let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);