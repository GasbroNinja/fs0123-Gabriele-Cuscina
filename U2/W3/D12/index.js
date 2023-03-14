
const savedNameElem = document.getElementById('savedName');
const nameInputElem = document.getElementById('nameInput');
const saveBtnElem = document.getElementById('saveBtn');
const removeBtnElem = document.getElementById('removeBtn');


const savedName = localStorage.getItem('name');
if (savedName) {
  savedNameElem.textContent = savedName;
}


saveBtnElem.addEventListener ('click', () => {
  const name = nameInputElem.value;
  localStorage.setItem('name', name);
  savedNameElem.textContent = name;
});


removeBtnElem.addEventListener('click', () => {
  localStorage.removeItem('name');
  savedNameElem.textContent = '';
  nameInputElem.value = '';
});



const counterElem = document.getElementById('counter');


let counter = sessionStorage.getItem('counter');
if (!counter) {
  counter = 0;
}

setInterval(() => {
  counter++;
  counterElem.textContent = counter;
  sessionStorage.setItem('counter', counter);
}, 1000);
