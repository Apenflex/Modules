export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                try {
                    const sibling = btn.closest('.module__info-show').nextElementSibling;
                    const minusBtn = btn.children[0].children[0];
                    minusBtn.classList.toggle('minus');
                    if (minusBtn.classList.contains('minus')) {
                        minusBtn.style.fill = '#9ec73d';
                        minusBtn.style.transition = 'all 0.4s';
                    } else {
                        minusBtn.style.fill = "white";
                        minusBtn.style.transition = "all 0.4s";
                    }
                    
                    sibling.classList.toggle('msg');
                    sibling.style.marginTop = '20px';
                }catch(e){}

            });
        });
    }
}