function displaySelectedRating() {
  let rateClicked = sessionStorage.getItem("rating");

  let displayRating = document.getElementById("display-rating");

  if (rateClicked === "undefined") {
    displayRating.innerText = `You selected none out of 5`;
    return;
  } else {
    displayRating.innerText = `You selected ${rateClicked} out of 5`;
    return;
  }
}

displaySelectedRating();
