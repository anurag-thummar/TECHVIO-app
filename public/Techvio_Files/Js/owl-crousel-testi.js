var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 7000,
  smartSpeed: 2000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [3000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
