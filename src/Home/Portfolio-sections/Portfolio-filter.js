// //LONG-IMG-SCROLL //

document.querySelectorAll('.home-portfolio-img').forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    const img = item.querySelector('img');
    const height = item.getAttribute('data-height') || 0;
    img.style.transform = `translateY(-${-100}%)`; // Applying the hover effect on mouseenter
  });

  item.addEventListener('mouseleave', function() {
    const img = item.querySelector('img');
    img.style.transform = 'translateY(0)'; // Resetting the image position on mouseleave
  });
});





// //LONG-IMG-SCROLL 



// // Wait for the document to load before adding event listeners
// document.addEventListener('DOMContentLoaded', function () {
//   // Get all filter buttons
//   const filters = document.querySelectorAll('#home-portfolio-flters li');

//   // Get all home-portfolio items
//   const home-portfolioItems = document.querySelectorAll('.home-portfolio-item');

//   // Add event listeners to each filter button
//   filters.forEach(filter => {
//       filter.addEventListener('click', function () {
//           const filterClass = filter.getAttribute('data-filter');

//           // Remove active class from all filters
//           filters.forEach(btn => btn.classList.remove('filter-active'));

//           // Add active class to the clicked filter
//           filter.classList.add('filter-active');

//           // Show or hide home-portfolio items based on the selected filter
//           home-portfolioItems.forEach(item => {
//               if (filterClass === '.all' || item.classList.contains(filterClass.slice(1))) {
//                   item.style.display = 'block';  // Show the item
//               } else {
//                   item.style.display = 'none';  // Hide the item
//               }
//           });
//       });
//   });
// });




document.addEventListener('DOMContentLoaded', function () {
  // Get all filter buttons
  const filters = document.querySelectorAll('#home-portfolio-flters li');

  // Get all home-portfolio items
  const portfolioItems = document.querySelectorAll('.home-portfolio-item');

  // Add event listeners to each filter button
  filters.forEach(filter => {
      filter.addEventListener('click', function () {
          const filterClass = filter.getAttribute('data-filter');

          // Remove active class from all filters
          filters.forEach(btn => btn.classList.remove('filter-active'));

          // Add active class to the clicked filter
          filter.classList.add('filter-active');

          // Filter home-portfolio items with smooth animation
          portfolioItems.forEach(item => {
              // Hide all items with transition
              if (filterClass === '.all' || item.classList.contains(filterClass.slice(1))) {
                  item.classList.add('visible');
                  item.classList.remove('hidden');
              } else {
                  item.classList.add('hidden');
                  item.classList.remove('visible');
              }
          });
      });
  });
});












