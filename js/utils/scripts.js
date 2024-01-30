/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// Add this script to your HTML file

    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Select all navigation links
    var navLinks = document.querySelectorAll('.nav-link');

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Check if the link's href matches the current page URL
        if (link.href === currentPageUrl) {
            // Add a class to highlight the active page
            link.classList.add('active');
        }
    });

    // function runQuery() {
    //     var query = document.getElementById('query').value;
    
    //     fetch('query_runner.php', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: 'query=' + encodeURIComponent(query),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);
    //     })
    //     .catch(error => {
    //         console.error('Error executing the query:', error);
    //         alert('Error executing the query.');
    //     });
    // }