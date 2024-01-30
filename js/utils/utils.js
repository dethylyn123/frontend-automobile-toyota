// import router
import {setRouter} from "../router/router.js";

// Set Router
setRouter();

const backendURL = "http://backend-automobile-toyota.test";

// Get Logged User Profile Name
async function getLoggedUser(){
  
    // Access User Profile API Endpoint
    const response = await fetch(
      backendURL + "/api/profile/show",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          "ngrok-skip-browser-warning": "69420", // Include ngrok bypass header directly
        },
      }
    );
  
  // Get response if 200-299 status code
    if (response.ok) {
      const json = await response.json();
      // console.log(json);
      document.getElementById("user_logged_name").innerHTML = 
        json.firstname   + " " + json.lastname;

       // Display user's image
      const imagePath = backendURL + "/storage/" + json.image;
      document.getElementById("user_logged_image").src = imagePath;

      // Sets value to the input field with id "user_id"
      if (document.getElementById("user_id")) {
        document.getElementById("user_id").value = json.id;
      }

    }

  // Get response if 400 or 500 status code
    else {
      const json = await response.json();
  
      errorNotification(json.message, 10);
  
    }
};

// Show Admin Pages
function showNavDealerPages() {
  if (localStorage.getItem("role") == "Dealer") {
   document.getElementById("nav_dealer_pages").innerHTML = 
    `<div class="sb-sidenav-menu-heading">Dealer Pages</div>
    <a class="nav-link" href="my-inventory.html">
        <div class="sb-nav-link-icon"><i class="fas fa-boxes"></i></div>
        My Inventory
    </a>`;
    
    // Highlight the active page
    var currentPageUrl = window.location.href;
    var navLinks = document.querySelectorAll('#nav_admin_pages .nav-link');

    navLinks.forEach(function(link) {
        if (link.href === currentPageUrl) {
            link.classList.add('active');
        }
    });
  }
}

// Show Admin Pages
function showNavAdminPages() {
  if (localStorage.getItem("role") == "Admin") {
   document.getElementById("nav_admin_pages").innerHTML = 
    `<div class="sb-sidenav-menu-heading">Admin Pages</div>
    <a class="nav-link" href="user.html">
        <div class="sb-nav-link-icon"><i class="fa-solid fa-user"></i></div>
        Users
    </a>
    <a class="nav-link" href="admin-vehicle.html">
        <div class="sb-nav-link-icon"><i class="fa-solid fa-car"></i></div>
        Vehicles
    </a>
    <a class="nav-link" href="supplier.html">
        <div class="sb-nav-link-icon"><i class="fa-solid fa-truck-field"></i></div>
        Suppliers 
    </a>
    <a class="nav-link" href="sale.html">
        <div class="sb-nav-link-icon"><i class="fa-solid fa-money-bill"></i></div>
        Sales 
    </a>
    <a class="nav-link" href="model.html">
        <div class="sb-nav-link-icon"><i class="fa-solid fa-car-side"></i></div>
        Models 
    </a>
    <a class="nav-link" href="admin-inventory.html">
        <div class="sb-nav-link-icon"><i class="fas fa-clipboard-list"></i></div>
        Inventories 
    </a>
    <a class="nav-link" href="admin-dealer.html">
        <div class="sb-nav-link-icon"><i class="fa-solid fa-building-circle-arrow-right"></i></div>
        Dealers 
    </a>
    <a class="nav-link" href="customer.html">
        <div class="sb-nav-link-icon"><i class="fa-solid fa-person"></i></div>
        Customers 
    </a>
    <a class="nav-link" href="data-query.html">
        <div class="sb-nav-link-icon"><i class="fa-solid fa-database"></i></div>
        Data Query 
    </a>
    `;

    // Highlight the active page
    var currentPageUrl = window.location.href;
    var navLinks = document.querySelectorAll('#nav_admin_pages .nav-link');

    navLinks.forEach(function(link) {
        if (link.href === currentPageUrl) {
            link.classList.add('active');
        }
    });
  }
}

// // Calendar
// function updateDate() {
//   var currentDate = new Date();
//   var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//   var formattedDate = currentDate.toLocaleDateString('en-US', options);
//   document.getElementById('currentDate').textContent = 'Date: ' + formattedDate;
// }

// // Initial call to set the date when the page loads
// updateDate();

// // Update the date every second
// setInterval(updateDate, 1000);

// // Here ends js code i personally added

// // Date and time picker
// $('.date').datetimepicker({
//   format: 'L'
// });
// $('.time').datetimepicker({
//   format: 'LT'
// });

// Notifications
function successNotification(message, seconds = 0){
    document.querySelector(".alert-success").classList.remove('d-none');
    document.querySelector(".alert-success").classList.add('d-block');
    document.querySelector(".alert-success").innerHTML = message;

    if (seconds != 0) {
        setTimeout(function () {
            document.querySelector(".alert-success").classList.remove('d-block');
            document.querySelector(".alert-success").classList.add('d-none');
        }, seconds * 1000);
    }
}

function errorNotification(message, seconds = 0){
    document.querySelector(".alert-danger").classList.remove('d-none');
    document.querySelector(".alert-danger").classList.add('d-block');
    document.querySelector(".alert-danger").innerHTML = message;

    if (seconds != 0) {
        setTimeout(function () {
            document.querySelector(".alert-danger").classList.remove('d-block');
            document.querySelector(".alert-danger").classList.add('d-none');
        }, seconds * 1000);
    }
}

export { backendURL, showNavAdminPages, showNavDealerPages, successNotification, errorNotification, getLoggedUser};