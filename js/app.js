let rating_section = document.querySelector(".rating-container");

rating_section.addEventListener("click", function (event) {
  event.preventDefault();

  //   console.log("This was clicked!");
  console.log(rating_section.children);

  let isClicked = false;

  function clickedBtn() {
    let elementIdName = event.target.id;
    console.log("Selected element ", elementIdName);
    let previousElement = document.getElementById(elementIdName)
      .previousElementSibling;

    if (isClicked === false) {
      // elementIdName = event.target.id; // get the id of the clicked element
      document.getElementById(elementIdName).style.backgroundColor = "#fb7413";
      document.getElementById(elementIdName).style.color = "#ffffff";

      // previousElement = document.getElementById(elementIdName).previousElementSibling;

      if (previousElement) {
        document.getElementById(previousElement.id).style.backgroundColor =
          "#959eac";
        document.getElementById(previousElement.id).style.color = "#ffffff";
      }
      //   console.log(previousElement.id);
      //   console.log;
      isClicked = true;
      return;
    } else {
      //   document.getElementById(elementIdName).style.backgroundColor = null;
      //   document.getElementById(elementIdName).style.color = null;
    }
  }

  clickedBtn();

  //   let submitBtn = document.getElementById("submit-btn");

  let selectedNumber = event.target.innerText;
  // console.log(selectedNumber);

  //let displayRating = document.querySelector("#display-rating");
  // displayRating.innerText = `You selected ${displayRating} out of 5`;

  let displayString = `You selected ${selectedNumber} out of 5`;
  console.log(displayString);

  //   document.querySelector(".rating-output-text").innerHTML = displayString;
  //   document.getElementById("display-rating").innerHTML = displayString;
  //   console.log(document.getElementById("display-rating"));

  //   let elementIdName = event.target.id; // get the id of the clicked element
  //   document.getElementById(elementIdName).style.backgroundColor = "#fb7413";
  //   document.getElementById(elementIdName).style.color = "#ffffff";
  //   console.log(event.target);
});

// submit button

// let submitBtn = document.getElementById("submit-btn");
