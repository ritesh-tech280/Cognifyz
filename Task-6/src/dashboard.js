const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "index.html";
}

// Display welcome message with username
const username = localStorage.getItem("username") || "User";
document.addEventListener("DOMContentLoaded", () => {
    const usernameEl = document.getElementById("username");
    if (usernameEl) {
        usernameEl.textContent = `Welcome, ${username}`;
    }
});

function logout() {
     const confirmAlert  = confirm("Are you sure want to Logout")
     if(!confirmAlert) {
        return 
     }
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "index.html";
}

const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const token = localStorage.getItem("token");

    const product = {
        name: document.getElementById("productName").value,
        category: document.getElementById("productCategory").value,
        quantity: document.getElementById("productQuantity").value,
        price: document.getElementById("productPrice").value,
    };

    const response = await fetch(
        "http://localhost:3000/api/products",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json",

                Authorization:
                    `Bearer ${token}`,
            },

            body: JSON.stringify(product),
        }
    );

    if (response.ok) {
        alert("Product Added");
        productForm.reset();
        loadProducts();
    }
}
);


async function loadProducts() {

    const token = localStorage.getItem("token");

    const response =
        await fetch(
            "http://localhost:3000/api/products",
            {
                headers: {
                    Authorization:
                        `Bearer ${token}`,
                },
            }
        );

    const products = await response.json();

    renderProducts(products);
    updateStats(products);
}

loadProducts();

function renderProducts(products) {

    const tableBody = document.getElementById("tableBody");

    if (products.length === 0) {

        tableBody.innerHTML = `
      <tr>
        <td colspan="5"
            class="text-center p-6">
            No Products Found
        </td>
      </tr>
    `;

        return;
    }

    tableBody.innerHTML = "";

    products.forEach((product) => {

        tableBody.innerHTML += `
       <tr class="border-b">

        <td class="p-4"> ${product.name} </td>
        <td class="p-4"> ${product.category}</td>
        <td class="p-4">${product.quantity}</td>
        <td class="p-4"> ₹${product.price}</td>
        <td class="p-4">
          <button onclick="deleteProduct('${product._id}')" class="text-red-600">
            Delete
          </button>
        </td>

      </tr>
    `;
    });
}


function updateStats(products) {

    document.getElementById(
        "totalProducts"
    ).textContent =
        products.length;

    const lowStock =
        products.filter(
            (p) => p.quantity < 10
        );

    document.getElementById("lowStock").textContent = lowStock.length;
    const value = products.reduce((sum, product) => sum + product.price * product.quantity,0);
    document.getElementById("inventoryValue").textContent = "₹" + value;
}

async function deleteProduct(productId) {
    if (confirm("Are you sure you want to delete this product?")) {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.ok) {
                loadProducts();
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Failed to delete product");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }
}

window.deleteProduct = deleteProduct;