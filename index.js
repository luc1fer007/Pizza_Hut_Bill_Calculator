const calcBtnInput = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = Number(billInput.value);
  const tipValue = Number(tipInput.value);
  const totalValue = billValue * (tipValue / 100) + billValue; //calculate the total with tip;
  totalSpan.innerText = totalValue.toFixed(2);
}
tipInput.addEventListener("keydown", (e) => {
  //access the event using "enter" button;
  if (e.key === "Enter") {
    calculateTotal();
  }
});
calcBtnInput.addEventListener("click", calculateTotal); //access the event with mouse "click";
