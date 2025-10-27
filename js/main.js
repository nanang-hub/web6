document.addEventListener('DOMContentLoaded', function() {
    const cafeItems = document.querySelectorAll('.cafe-item');
    
    cafeItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    cafeItems.forEach(item => {
        item.addEventListener('click', function() {
            const cafeName = this.querySelector('.cafe-name-overlay').textContent;
            console.log(`Clicked on ${cafeName} cafe`);
        });
    });
});
