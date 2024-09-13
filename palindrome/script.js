const btn = document.getElementById("check-btn");
const txt = document.getElementById("text-input");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const specialChar = txt.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  
  if (txt.value === "") {
    alert("Please input a value");
  } else if (txt.value.length === 1) {
    result.textContent = `${txt.value} é um palíndromo`;
  } else if (specialChar === specialChar.split("").reverse().join("")) {
    result.textContent = `${txt.value} é um palíndromo`;
  } else {
    result.textContent = `${txt.value} não é um palíndromo`;
  }
});
