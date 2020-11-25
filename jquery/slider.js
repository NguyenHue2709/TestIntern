jQuery(document).ready(function ($) {
  var sliderContainer = $(".slider");
  var slideGroup = $(".slide-group");
  var slideItem = $(".slide-item");
  var prevBtn = $(".prev");
  var nextBtn = $(".next");

  var slideHeight = slideItem.height();
  var slideWidth = slideItem.width();
  var slideCount = slideItem.length;
  var totalSlideWidth = slideCount * slideWidth;
  sliderContainer.css({ width: slideWidth, height: slideHeight });
  slideGroup.css({ width: totalSlideWidth, marginLeft: -slideWidth });
  $("#slide ul li:last-child").prependTo(slideGroup);

  //animate di chuyển ảnh
  setInterval(function () {
    slideGroup.animate(
      {
        left: -slideWidth
      },
      1000,
      function () {
        $(".slide-item:first-child").appendTo(slideGroup);
        slideGroup.css("left", "");
      }
    );
  }, 5000);
  function moveRight() {
    slideGroup.animate(
      {
        left: -slideWidth
      },
      2000,
      function () {
        $(".slide-item:last-child").prependTo(slideGroup);
        slideGroup.css({ left: "" });
      }
    );
  }

  function moveLeft() {
    slideGroup.animate(
      {
        left: +slideWidth
      },
      2000,
      function () {
        $(".slide-item:first-child").appendTo(slideGroup);
        slideGroup.css({ left: "" });
      }
    );
  }

  prevBtn.click(function () {
    moveLeft();
  });

  nextBtn.click(function () {
    moveRight();
  });
});
