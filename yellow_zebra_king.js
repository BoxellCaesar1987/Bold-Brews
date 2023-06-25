//Function that renders the shop page
const renderShopPage = () => {
  let contentDiv = document.getElementById('main_content');
  contentDiv.innerHTML = '<div class="shop_container"> \
    <div class="shop_header"> \
        <h1>Welcome to the Specialty Java House</h1> \
        <h2>Serving Hand-Crafted Brews and Specialty Blends</h2> \
    </div> \
    <div class="shop_menu"> \
        <h3>Menu</h3> \
        <ul> \
            <li>Espresso</li> \
            <li>Cappuccino</li> \
            <li>Latte</li> \
            <li>Mocha</li> \
            <li>Cold Brew</li> \
            <li>Pour-over</li> \
            <li>Nitro Brew</li> \
            <li>Specialty Blends</li> \
        </ul> \
    </div> \
    <div class="shop_specials"> \
        <h3>Special of the Day</h3> \
        <p>Today's special is our house-blended Honey Vanilla Latte!</p> \
    </div> \
    <div class="shop_hours"> \
        <h3>Hours of Operation</h3> \
        <p>Monday - Friday: 8am - 6pm</p> \
        <p>Saturday: 10am - 4pm</p> \
        <p>Sunday: Closed</p> \
    </div> \
  </div>';
};

//Function that adds the shop page to the DOM
const initShopPage = () => {
  let container = document.getElementById('main_page');
  let shopDiv = document.createElement('div');
  shopDiv.id = 'main_content';
  shopDiv.className = 'page_container';
  container.appendChild(shopDiv);
  renderShopPage();
};

//Function that renders the shop page
const renderCoffeePage = () => {
  let contentDiv = document.getElementById('main_content');
  contentDiv.innerHTML = '<div class="coffee_container"> \
    <div class="coffee_header"> \
        <h1>Specialty Java House Coffees</h1> \
        <h2>Hand-crafted, unique blends made with the finest ingredients</h2> \
    </div> \
    <div class="coffee_roast_types"> \
        <h3>Coffee Roast Types</h3> \
        <ul> \
            <li>Light</li> \
            <li>Medium</li> \
            <li>Dark</li> \
            <li>Extra Dark</li> \
        </ul> \
    </div> \
    <div class="coffee_flavors"> \
        <h3>Coffee Flavors</h3> \
        <ul> \
            <li>Hazelnut</li> \
            <li>Vanilla</li> \
            <li>Caramel</li> \
            <li>Chocolate</li> \
        </ul> \
    </div> \
    <div class="coffee_blends"> \
        <h3>Specialty Blends</h3> \
        <ul> \
            <li>Honey Vanilla</li> \
            <li>Hazelnut Caramel</li> \
            <li>Mocha Latte</li> \
            <li>Coconut Mocha</li> \
        </ul> \
    </div> \
  </div>';
};

//Function that adds the coffee page to the DOM
const initCoffeePage = () => {
  let container = document.getElementById('main_page');
  let coffeeDiv = document.createElement('div');
  coffeeDiv.id = 'main_content';
  coffeeDiv.className = 'page_container';
  container.appendChild(coffeeDiv);
  renderCoffeePage();
};

//Function that renders the shop page
const renderFoodPage = () => {
  let contentDiv = document.getElementById('main_content');
  contentDiv.innerHTML = '<div class="food_container"> \
    <div class="food_header"> \
        <h1>Delicious Food at the Specialty Java House</h1> \
    </div> \
    <div class="food_breakfast"> \
        <h3>Breakfast</h3> \
        <ul> \
            <li>Egg and Cheese Croissant</li> \
            <li>Egg and Bacon Slider</li> \
            <li>Yogurt Parfait</li> \
            <li>French Toast Sandwich</li> \
        </ul> \
    </div> \
    <div class="food_lunch"> \
        <h3>Lunch</h3> \
        <ul> \
            <li>Chicken Caesar Wrap</li> \
            <li>Veggie Wrap</li> \
            <li>Turkey Club Sandwich</li> \
            <li>BLT Sandwich</li> \
        </ul> \
    </div> \
    <div class="food_snacks"> \
        <h3>Snacks</h3> \
        <ul> \
            <li>Assorted Pastries</li> \
            <li>Muffins</li> \
            <li>Fruit Cups</li> \
            <li>Granola Bars</li> \
        </ul> \
    </div> \
  </div>';
};

//Function that adds the food page to the DOM
const initFoodPage = () => {
  let container = document.getElementById('main_page');
  let foodDiv = document.createElement('div');
  foodDiv.id = 'main_content';
  foodDiv.className = 'page_container';
  container.appendChild(foodDiv);
  renderFoodPage();
};

//Add the shop page to the DOM on window load
window.addEventListener('load', initShopPage);

//Function to change main content when shop link is clicked
const shopLinkClicked = () => {
  let shopLink = document.getElementById('shop_link');
  shopLink.addEventListener('click', initShopPage);
};

//Function to change main content when coffee link is clicked
const coffeeLinkClicked = () => {
  let coffeeLink = document.getElementById('coffee_link');
  coffeeLink.addEventListener('click', initCoffeePage);
};

//Function to change main content when food link is clicked
const foodLinkClicked = () => {
  let foodLink = document.getElementById('food_link');
  foodLink.addEventListener('click', initFoodPage);
};

//Function to call all link click functions
const initLinkClicks = () => {
  shopLinkClicked();
  coffeeLinkClicked();
  foodLinkClicked();
};

//Call function to add event listeners to both links
initLinkClicks();