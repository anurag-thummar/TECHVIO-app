// //LONG-IMG-SCROLL //


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.portfolio-img').forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            const img = item.querySelector('img');
            const height = item.getAttribute('data-height');

            if (height) {
                img.style.transform = `translateY(-${height}px)`;
            }
        });

        item.addEventListener('mouseleave', function () {
            const img = item.querySelector('img');
            img.style.transform = 'translateY(0%)';
        });
    });
});




// //LONG-IMG-SCROLL 



// // Wait for the document to load before adding event listeners
// document.addEventListener('DOMContentLoaded', function () {
//   // Get all filter buttons
//   const filters = document.querySelectorAll('#portfolio-flters li');

//   // Get all portfolio items
//   const portfolioItems = document.querySelectorAll('.portfolio-item');

//   // Add event listeners to each filter button
//   filters.forEach(filter => {
//       filter.addEventListener('click', function () {
//           const filterClass = filter.getAttribute('data-filter');

//           // Remove active class from all filters
//           filters.forEach(btn => btn.classList.remove('filter-active'));

//           // Add active class to the clicked filter
//           filter.classList.add('filter-active');

//           // Show or hide portfolio items based on the selected filter
//           portfolioItems.forEach(item => {
//               if (filterClass === '.all' || item.classList.contains(filterClass.slice(1))) {
//                   item.style.display = 'block';  // Show the item
//               } else {
//                   item.style.display = 'none';  // Hide the item
//               }
//           });
//       });
//   });
// });




// document.addEventListener('DOMContentLoaded', function () {
//     // Get all filter buttons
//     const filters = document.querySelectorAll('#portfolio-flters li');

//     // Get all portfolio items
//     const portfolioItems = document.querySelectorAll('.portfolio-item');

//     // Add event listeners to each filter button
//     filters.forEach(filter => {
//         filter.addEventListener('click', function () {
//             const filterClass = filter.getAttribute('data-filter');

//             // Remove active class from all filters
//             filters.forEach(btn => btn.classList.remove('filter-active'));

//             // Add active class to the clicked filter
//             filter.classList.add('filter-active');

//             // Filter portfolio items with smooth animation
//             portfolioItems.forEach(item => {
//                 // Hide all items with transition
//                 if (filterClass === '.all' || item.classList.contains(filterClass.slice(1))) {
//                     item.classList.add('visible');
//                     item.classList.remove('hidden');
//                 } else {
//                     item.classList.add('hidden');
//                     item.classList.remove('visible');
//                 }
//             });
//         });
//     });
// });









document.addEventListener('DOMContentLoaded', function () {
    // Get all filter buttons
    const filters = document.querySelectorAll('#portfolio-flters li');

    // Get all portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Add event listeners to each filter button
    filters.forEach(filter => {
        filter.addEventListener('click', function () {
            const filterClass = filter.getAttribute('data-filter');

            // Remove active class from all filters
            filters.forEach(btn => btn.classList.remove('filter-active'));

            // Add active class to the clicked filter
            filter.classList.add('filter-active');

            // Filter portfolio items with smooth animation
            portfolioItems.forEach(item => {
                // Hide or show items based on the filter
                if (filterClass === '.all' || item.classList.contains(filterClass.slice(1))) {
                    item.style.display = 'block';  // Show the item (display: block)
                } else {
                    item.style.display = 'none';   // Hide the item (display: none)
                }
            });
        });
    });
});
