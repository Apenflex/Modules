window.addEventListener('DOMContentLoaded', () => { 
    const body = document.querySelector('body');
    let textNodes = [];

    function recursy(element) {
        element.childNodes.forEach((node) => {

            if (node.nodeName.match(/^H\d$/)) {
                // textNodes.push(node.textContent);
                const obj = {
                    header: node.nodeName,
                    content: node.textContent
                };
                textNodes.push(obj);
            } else {
                recursy(node);
            }

        });
    }
    recursy(body);
    console.log(textNodes);

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "POST",
    //     body: JSON.stringify(textNodes),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json));
});