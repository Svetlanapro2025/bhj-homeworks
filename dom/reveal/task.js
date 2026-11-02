let blockVisible = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    blockVisible.forEach((block) => {
        const { top, bottom } = block.getBoundingClientRect();
         if(top > window.innerHeight || bottom < 0) {
            block.className = 'reveal';
         } else {
            block.className = 'reveal reveal_active';
         }
    });  
});
