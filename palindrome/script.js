const btn = document.getElementById("check-btn");
const txt = document.getElementById("text-input"); //value retorna string do que foi digitado//
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  /*Transforma todos os caracters em letra minúscula e substitui os 
 caracters que não são letras de a-z e números de 0-9 por string vazia*/
  const specialChar = txt.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (txt.value === "") {
    alert("Please input a value");
  } else if (txt.value.length === 1) {
    result.textContent = `${txt.value} é um palíndromo`;

    //Transforma o string em um array, reverte a ordem dos elementos e junta-os.
  } else if (specialChar === specialChar.split("").reverse().join("")) {
    result.textContent = `${txt.value} é um palíndromo`;
  } else {
    result.textContent = `${txt.value} não é um palíndromo`;
  }
});
