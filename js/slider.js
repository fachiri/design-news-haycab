let isDown = false;
let startX; 
let scrollLeft;
let slider = [];
for (let i = 1; i <= 4; i++) {
    slider[i] = document.querySelector('.slider'+i);

    slider[i].addEventListener('mousedown', (e) => {
    isDown = true;
    slider[i].classList.add('active');
    startX = e.pageX - slider[i].offsetLeft;
    scrollLeft = slider[i].scrollLeft;
    });
    slider[i].addEventListener('mouseleave', () => {
    isDown = false;
    slider[i].classList.remove('active');
    });
    slider[i].addEventListener('mouseup', () => {
    isDown = false;
    slider[i].classList.remove('active');
    });
    slider[i].addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider[i].offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider[i].scrollLeft = scrollLeft - walk;
    // console.log(slider[i].scrollLeft);
    });
}