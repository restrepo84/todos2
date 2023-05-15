document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

$(".alt-title-text").css("color", "red");

const words = ["fast", "accurate", "efficient"];
let tracker = 1;

const timerId = setInterval(function () {
  $(".alt-title-text").text(words[tracker]);
  tracker++;
  if (tracker === 3) {
    tracker = 0;
  }
}, 2000);
