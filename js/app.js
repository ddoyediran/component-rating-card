let rating_section = document.querySelector(".rating-container");

rating_section.addEventListener("click", function (event) {
  console.log("This was clicked!");
  console.log(rating_section.children);

  let elementIdName = event.target.id;
  //document.getElementById("elementIdName").style.backgroundColor = "red";
  console.log(event.target);
});
