const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);
          
    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Будь ласка, виберіть розмір та матеріал картини';
            resultBlock.style.fontSize = "2rem";
        } else if(promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = `Your price ${Math.round(sum * 0.7)}`;
            resultBlock.style.fontSize = "2rem";
        } else {
            resultBlock.textContent = `Your price ${sum}`;
            resultBlock.style.fontSize = '2rem';
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;