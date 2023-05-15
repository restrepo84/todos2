let input = document.querySelector("#todo-input");

input.addEventListener("focus", () => {
  input.style.borderColor = "red";
});
input.addEventListener("focusout", () => {
  input.style.borderColor = "black";
});
let addbutton = $("#todo-button-add");

addbutton.click(function () {
  if (input.value === "") {
    alert("Please Fill in The Blank");
    return;
  }
  if (input.value.length >= 50) {
    alert("no more than 50 characters");
    return;
  }
  $("#todo-list p").remove();

  let item = input.value.trim();
  $("#todo-list").prepend(`<li id="todo-item-3" style="display:none;">
    <button class="todo-item-button">
      ${item}
    </button>
    <button class="todo-item-button-delete">x</button>
  </li>
  `);
  $("#todo-item-3").slideDown("slow");

  $(".todo-item-button-delete").click(function () {
    $(this)
      .parent()
      .slideUp("slow", function () {
        $(this).remove();
        if ($("#todo-list li").length < 1) {
          $("#todo-list").append("<p>No more todos left!</p>");
        }
      });
  });
  toggleEvents();
});

$(".todo-item-button-delete").click(function () {
  $(this)
    .parent()
    .slideUp("slow", function () {
      $(this).remove();
      if ($("#todo-list li").length < 1) {
        $("#todo-list").append("<p>No more todos left!</p>");
      }
    });
});

function toggleEvents() {
  $(".todo-item-button").off("click");
  $(".todo-item-button").on("click", function () {
    $(this).toggleClass("line-through");
  });
}
toggleEvents();
