function paying() {
  var namesInput = document.querySelector(".namesInput");
  var names = namesInput.value.split(",");
  var result = document.querySelector(".heroBoxItem h1");

  if (
    names.length === 0 ||
    names.length === 1 ||
    namesInput.value.trim() === "" ||
    !namesInput.value.includes(",")
  ) {
    result.textContent =
      "Please enter names separated by commas, without any white space.";
    return;
  }

  var whoIsGoingToPay = names.length;

  var payingPersonPosition = Math.floor(Math.random() * whoIsGoingToPay);
  var payingPerson = names[payingPersonPosition];

  result.textContent = `${payingPerson} - bring your wallet to the party!`;
}

var namesInput = document.querySelector(".namesInput");
namesInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    paying();
  }
});
