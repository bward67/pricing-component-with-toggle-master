const basicPrice = document.querySelector("[data-basic-price]");
const professionalPrice = document.querySelector("[data-professional-price]");
const masterPrice = document.querySelector("[data-master-price]");
const checkmark = document.querySelector(".toggle input");

checkmark.addEventListener("change", () => {
  if (checkmark.checked) {
    //console.log("checked");
    basicPrice.innerHTML = "199.99";
    professionalPrice.innerHTML = "249.99";
    masterPrice.innerHTML = "399.99";
  } else {
    //console.log("not-checked");
    basicPrice.innerHTML = "19.99";
    professionalPrice.innerHTML = "24.99";
    masterPrice.innerHTML = "39.99";
  }
});
