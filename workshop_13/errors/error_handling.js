async function loadProduct(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        
            if (!response.ok) {
            document.body.textContent = `Error: product was not found! ${response.status} ${response.statusText}`;
            return;
        }

        const data = await response.json();

        console.log(data);

        document.body.textContent = `${data.title} ${data.price}`;
    } catch (error) {
        document.body.textContent = `Error: ${error.message}`;
        return;
    }
}

loadProduct(200);