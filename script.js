function showSpinner() {
    document.body.innerHTML += '<div class="spinner"><img src="images/spinner.gif" alt="loading"></div>';
    setTimeout(() => {
      document.querySelector(".spinner").remove();
    }, 1000);
  }
  
  
  document.getElementById("treeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for planting a tree with us! 🌱");
  });
  
  
  const categories = [
    "All Trees", "Fruit Tree", "Flowering Tree", "Shade Tree",
    "Medicinal Tree", "Timber Tree", "Evergreen Tree"
  ];
  const categoryList = document.querySelector(".categories");
  
  if (categoryList) {
    categories.forEach(cat => {
      let btn = document.createElement("button");
      btn.innerText = cat;
      btn.onclick = () => loadCategory(cat);
      categoryList.appendChild(btn);
    });
  }
  
  // Load Category Function
  function loadCategory(category) {
    showSpinner();
    console.log(`Loading ${category} trees...`);
  }
  
  
  document.querySelectorAll(".tree-card h3").forEach(card => {
    card.addEventListener("click", () => {
      alert(`Details of ${card.innerText}`);
    });
  });
  let total = 0;
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");


document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseInt(button.getAttribute("data-price"));

    
    const li = document.createElement("li");
    li.textContent = `${name} - ৳${price}`;
    cartItems.appendChild(li);

    
    total += price;
    totalDisplay.textContent = total;
  });
});
