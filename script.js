document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const products = document.querySelectorAll(".product");

    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();
        
        products.forEach(product => {
            let productName = product.querySelector("h4").innerText.toLowerCase();
            
            if (productName.includes(filter)) {
                product.style.display = "block"; 
            } else {
                product.style.display = "none"; 
            }
        });
    });
});
document.querySelectorAll(".product img").forEach(img => {
    img.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.3)";
    });

    img.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});
