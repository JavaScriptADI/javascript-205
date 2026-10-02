// Workshop 12 starter: this store works with .then().
// Live in class we turn it into async/await and teach it to survive failure.
fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        const productsUlElement = document.querySelector(".product-grid");

        data.products.forEach(product => {
            const li = document.createElement("li");
            li.classList.add("product-card");
            li.innerHTML = `
                <div class="product-card__media">
                    <img src="${product.thumbnail}" alt="${product.title}" loading="lazy" decoding="async">
                    <span class="tag tag--discount">−${product.discountPercentage}%</span>
                </div>
                <div class="product-card__head">
                    <p class="product-card__category">${product.category}</p>
                    <span class="badge badge--in">${product.availabilityStatus}</span>
                </div>
                <h2 class="product-card__title">${product.title}</h2>
                <p class="product-card__brand">${product.brand}</p>
                <p class="rating">
                    <span class="rating__stars" style="--rating: ${product.rating}" aria-hidden="true">★★★★★</span>
                    <span class="rating__value">${product.rating}</span>
                </p>
                <div class="product-card__foot">
                    <p class="price">
                        <span class="price__now">$${product.price}</span>
                    </p>
                    <button class="bag" type="button">Add to bag</button>
                </div>
            `;
            productsUlElement.append(li);
        });
    });
