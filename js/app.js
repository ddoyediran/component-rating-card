//// New way ////
let allStarsElement = document.querySelectorAll(".rate");

// allStarsElement.forEach((element, i) => {
//   // console.log(element);
//   element.addEventListener("click", function (event) {
//     let currentElementIndex = i + 1;
//     // let previousElementIndex = i - 1;

//     allStarsElement.forEach((element, j) => {
//       if (currentElementIndex >= j + 1) {
//         element.style.backgroundColor = "#fb7413";
//         element.style.color = "#ffffff";
//       } else {
//         element.style.backgroundColor = "#2f3a46";
//         element.style.color = "#959eac";
//       }
//     });
//   });
// });

let ratingClicked;

allStarsElement.forEach((element, i) => {
  // console.log(element);
  element.addEventListener("click", function (event) {
    let currentElementIndex = i + 1;
    let previousElementIndex = i;

    ratingClicked = currentElementIndex;

    allStarsElement.forEach((element, j) => {
      if (j + 1 === currentElementIndex) {
        //console.log(element);
        element.style.backgroundColor = "#fb7413";
        element.style.color = "#ffffff";
      } else if (j + 1 === previousElementIndex) {
        //console.log("prev", element);
        element.style.backgroundColor = "#959eac";
        element.style.color = "#ffffff";
      } else {
        //console.log("others ", element);
        element.style.backgroundColor = "#2f3a46";
        element.style.color = "#959eac";
      }
    });
  });
});

/// Store data in the sessionStorage for usage in another page ///

let submitForm = document.getElementById("submit-form");

submitForm.addEventListener("submit", (event) => {
  //event.preventDefault;

  // Remove all saved data from sessionStorage
  sessionStorage.clear();

  sessionStorage.setItem("rating", ratingClicked);
});
