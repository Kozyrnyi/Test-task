document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelector('[data-fixed]');
    let startPosition = window.scrollY || document.documentElement.scrollTop;
    
    function handlerScroll(){
        const newPosition = window.scrollY || document.documentElement.scrollTop;
        if(startPosition > newPosition){
            orderButtons.classList.add('show');
        } else{
            orderButtons.classList.remove('show');
        }
        startPosition = newPosition <= 0 ? 0 : newPosition;
    }

    document.addEventListener('scroll', handlerScroll);
})
  