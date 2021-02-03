$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").addClass("sticky-header");
  } else {
    $("header").removeClass("sticky-header");
  }
  if ($(this).scrollTop() > 100) {
    $("body").addClass("scrolltop");
    $(".btn-scroll-top").removeClass("d-none");
  } else {
    $("body").removeClass("scrolltop");
    $(".btn-scroll-top").addClass("d-none");
  }
});

// ANIMATE ITEMS ON SCROLL
function scrollWaypointInit(items, trigger) {
  items.each(function () {
    var element = $(this),
      osAnimationClass = element.data("animation"),
      osAnimationDelay = element.attr("data-animation-delay");

    element.css({
      "-webkit-animation-delay": osAnimationDelay,
      "-moz-animation-delay": osAnimationDelay,
      "animation-delay": osAnimationDelay,
    });

    var trigger = trigger ? trigger : element;

    trigger.waypoint(
      function () {
        element.addClass("animated").addClass(osAnimationClass);
      },
      {
        triggerOnce: true,
        offset: "100%",
      }
    );
  });
}

// BOOTSTRAP SELECT
$(function () {
  $("#mainSearchHomeType").selectpicker();
});
