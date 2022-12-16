const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');
    
    items.forEach((item) => {
        item.addEventListener("click", function () {
            console.log(item);
            items.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");

            switch (this) {
                case btnAll:
                    typeFilter(markAll);
                    break;
                case btnLovers:
                    typeFilter(markLovers);
                    break;
                case btnChef:
                    typeFilter(markChef);
                    break;
                case btnGirl:
                    typeFilter(markGirl);
                    break;
                case btnGuy:
                    typeFilter(markGuy);
                    break;
                case btnGrandmother:
                    typeFilter();
                    break;
                case btnGranddad:
                    typeFilter();
                    break;
            }
        });
    });
    
    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };
};

export default filter;