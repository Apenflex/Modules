let list = document.querySelectorAll('.menu__items');
    for(let i=0; i<list.length; i++) {
        list[i].onmouseover = function() {
            let j = 0;
            while (j < list.length) {
                list[j++].className = 'menu__items';
            }
            list[i].className = 'menu__items_active';
        };
    }

