import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll(".balcon_icons_img"),
        windowWidth = document.querySelectorAll("#width"),
        windowHeight = document.querySelectorAll("#height"),
        windowType = document.querySelectorAll("#view_type"),
        windowProfile = document.querySelectorAll(".checkbox");

    checkNumInputs('#width');
    checkNumInputs('#height');
    
    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                
            });
        });
    }
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
};

export default changeModalState;
