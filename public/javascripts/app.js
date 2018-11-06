const caseButton = document.getElementById("caseButton");
const caseInput = document.getElementById("caseNumber");
const caseCheckbox = document.getElementById("openClaro");

caseButton.onclick = onClickHandler;

function cleanInput() {
  document.getElementById("caseNumber").value = "";
}

function onClickHandler() {
  const caseInputValue = parseInt(caseInput.value);
  if (isNaN(caseInputValue)) {
    alert("El valor introducido debe ser un numero");
    caseInput.value = "";
    return;
  }
  const checkboxValue = parseInt(caseCheckbox.value);
  if (isNaN(checkboxValue)) {
    checkboxValue = null;
  }
  try {
    sendValueToAPI(caseInputValue, checkboxValue);
  } catch (ex) {
    console.log(ex);
  }
  cleanInput();
  alert("El caso ha sido abierto");
}

async function sendValueToAPI(value, checkbox) {
  await axios
    .post("/sac/case", { value, checkbox })
    .then(console.log)
    .catch(console.log);
}
