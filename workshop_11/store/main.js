fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.products);
        const productsUlElement = document.querySelector(".product-grid");

        data.products.forEach(product => {
            const li = document.createElement("li");
            li.classList.add("product-cards");
            li.innerHTML = (`
                <div class="product-card__media">
                    <img src="${product.thumbnail}" alt="${product.title}" loading="lazy" decoding="async">
                    <span class="tag tag--discount">−${product.discountPercentage}%</span>
                </div>
                <div class="product-card__head">
                    <p class="product-card__category">Beauty</p>
                    <span class="badge badge--in">In stock</span>
                </div>
                <h2 class="product-card__title">${product.title}</h2>
                <p class="product-card__brand">${product.brand}</p>
                <p class="rating">
                    <span class="rating__stars" style="--rating: 2.56" aria-hidden="true">★★★★★</span>
                    <span class="rating__value">2.56</span>
                </p>
                <div class="product-card__foot">
                    <p class="price">
                        <span class="price__now">$${product.price}</span>
                        <s class="price__was">$11.16</s>
                    </p>
                    <button class="bag" type="button">Add to bag</button>
                </div>
            `);
            productsUlElement.append(li);
        });
    });