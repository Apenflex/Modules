(async function() {

    let currentRate = 1;
    let ratesData;

    const response = await fetch('api/products.json');
    const products = await response.json();
    renderProducts(products, currentRate);

    // Promise syntax
    // fetch('api/products.json')
    //   .then( response => response.json () )
    //   .then( products => renderProducts(products) );

    // // AJAX
    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     const products = JSON.parse(xhr.responseText);
    //     renderProducts(products);
    //   }
    // }
    // xhr.open('GET', 'api/products.json', true);
    // xhr.send();

    function renderProducts(products, currentRate) {
        const productContainer = document.querySelector('.main-products__list');
        productContainer.innerHTML = '';
        for (const product of products) {
            productContainer.innerHTML += `
            <article class="product-card">
              <img
                class="product-card__image"
                src="${product.image}"
                alt="${product.title}"
              />
              <h3 class="product-card__h3">${product.title}</h3>
              <p class="product-card__description">${product.description}</p>
              <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                  Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                  Buy - ${(product.price * currentRate).toFixed(2)}
                </button>
              </div>
            </article>`;
        }
    }

    async function convertCurrency() {
        const currency = document.querySelector('.currency').value;
        if (ratesData == null) {
          const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
          ratesData = await response.json();
        }
        currentRate = ratesData.rates[currency];
        renderProducts(products, currentRate);
    }
    document.querySelector('.convert-currency').addEventListener('click', convertCurrency);

})();