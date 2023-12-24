document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the local mock API file
    fetch('mock-api.json')
        .then(response => response.json())
        .then(data => {
            // Manipulate the DOM to display dynamic content
            const productContainer = document.getElementById('product-container');

            // Assuming 'products' is the key in  JSON structure
            const products = data.products;

            // Loop through each product and create HTML dynamically
            products.forEach(product => {
                const productDetails = `
                    <div class="product-details">
                        <img class="product-image" src="${product.image}" alt="${product.title}">
                        <h2 class="product-title">${product.title}</h2>
                        <p class="product-description">${product.description}</p>
                        <p class="product-price">${product.price}</p>
                        <h3>Specifications</h3>
                        <ul>
                            <li>${product.specifications.display}</li>
                            <li>${product.specifications.camera}</li>
                            <li>${product.specifications.processor}</li>
                            <li>${product.specifications.storage}</li>
                        </ul>
                        <h3>Customer Reviews</h3>
                        <ul>
                            ${product.reviews.map(review => `
                                <li>
                                    <strong>${review.user}</strong> - ${review.rating} stars
                                    <p>${review.comment}</p>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;

                productContainer.innerHTML += productDetails;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
