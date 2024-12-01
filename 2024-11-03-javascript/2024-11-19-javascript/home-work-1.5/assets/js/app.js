const countingArr = [];
function collectData() {
  const petKindValue = document.getElementById(`petKind`).value;
  const petNameValue = document.getElementById(`petName`).value;
  const petAgeValue = document.getElementById(`petAge`).value;
  const petImageValue = document.getElementById(`petImage`).value;

  return {
    petAgeValue: petAgeValue,
    petImageValue: petImageValue,
    petKindValue: petKindValue,
    petNameValue: petNameValue,
  };
}

function generateHTML(data) {
  const newHTML = `
  <tr>
  <td>${data.petKindValue}</td>
  <td>${data.petNameValue}</td>
  <td>${data.petAgeValue}</td>
  <td><img src="${data.petImageValue}" width="100" height="100" /></td>
</tr>`;
  return newHTML;
}
function renderHTML(newHTML, count) {
  const tableBody = document.getElementById("tableBody");
  const countingDiv = document.getElementById(`countingDiv`);
  countingDiv.innerHTML = count;
  tableBody.innerHTML += newHTML;
}
function validation(data) {
  if (
    !data.petKindValue ||
    !data.petNameValue ||
    !data.petImageValue ||
    data.petAgeValue < 0
  ) {
    return false;
  }
  return true;
}

function counting(data) {
  countingArr.push(data.petAgeValue);
  return countingArr.length;
}
function setToLocalStorage(data) {
  const currentJSON = localStorage.getItem("pets");
  let petArr;

  if (!currentJSON) {
    petArr = [];
  } else {
    petArr = JSON.parse(currentJSON);
  }

  petArr.push(data);
  localStorage.setItem("pets", JSON.stringify(petArr));
  localStorage.setItem("count", countingArr.length);
}

function loadFromLocalStorage() {
  const petsJSON = localStorage.getItem("pets");
  const counting = localStorage.getItem(`count`);
  if (petsJSON) {
    const pets = JSON.parse(petsJSON);
    for (const pet of pets) {
      const newHTML = generateHTML(pet);
      renderHTML(newHTML, counting);
    }
  }
}

function resetForm() {
  const petsForm = document.getElementById(`form`);
  petsForm.reset();
  const petKind = document.getElementById(`petKind`);
  petKind.focus();
}

function doAll(event) {
  event.preventDefault();
  const data = collectData();
  resetForm();
  if (validation(data)) {
    const count = counting(data);
    const newHTML = generateHTML(data);
    renderHTML(newHTML, count);
    setToLocalStorage(data);
  } else {
    alert(`error missing information`);
  }
}

loadFromLocalStorage();