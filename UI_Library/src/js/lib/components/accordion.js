import $ from '../core';

$.prototype.accordion = function (
    headActiveClass = 'accordion-head--active',
    contentActiveClass = 'accordion-content--active',
    paddings = 40) {
        for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActiveClass);
            $(this[i].nextElementSibling).toggleClass(contentActiveClass);

            if (this[i].classList.contains(headActiveClass)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';
            }
        });
    }
};

$('.accordion-head').accordion();