const shoppingMain = document.querySelector('.shopping-container main')

const getProducts = () => {
    // get products from API
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json``)
        .then(data =>
            // create Box from every product
            data.map(product => {
            const cardBox = document.createElement('div');
            const imgCard = document.createElement('img');
            const bodyCard = document.createElement('div');
            const titleCard = document.createElement('h5');
            const textCard = document.createElement('p');
            const bottoms = document.createElement('div');
            const btnCard = document.createElement('button');
            const priceCard = document.createElement('p');

            shoppingMain.appendChild(cardBox);
            cardBox.appendChild(imgCard);
            cardBox.appendChild(bodyCard);
            bodyCard.appendChild(titleCard);
            bodyCard.appendChild(textCard);
            bottoms.appendChild(btnCard);
            bottoms.appendChild(priceCard);
            bodyCard.appendChild(bottoms);

            cardBox.className = 'card';
            imgCard.className = 'card-img-top';
            bodyCard.className = 'card-body';
            titleCard.className = 'card-title';
            textCard.className = 'card-text';
            bottoms.className = 'bottoms';
            btnCard.className = 'btn btn-warning buy-button';
            priceCard.className = 'card-price';

            imgCard.src = product.image;
            imgCard.alt = product.title.slice(0, 2);
            titleCard.textContent = product.title;
            textCard.textContent = product.description;
            btnCard.href = '#';
            btnCard.textContent = 'Buy Now'
            priceCard.textContent = `${product.price} $`;

        }))
        .catch(err => console.log(err))
}
getProducts();