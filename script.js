const billInput = document.querySelector('.bill-input');
const tipAmount = document.querySelectorAll('.tip-amount');
const customTip = document.querySelector('.custom-tip');
const pplNumInput = document.querySelector('.ppl-num');
const tip = document.querySelector('.tip');
const totalPerson = document.querySelector('.total-person');
const resetBtn = document.querySelector('.reset-btn');

const billContainer = document.querySelector('.bill-container');
const tipContainer = document.querySelector('.tip-container');
const numOfPeople = document.querySelector('.num-of-ppl-container');

let bill = 0;
let selectedTip;
let pplNum = 0;

function split() {
  if (errorChech()) {
    resetBtn.classList.add('active');

    const tipResult = (bill * selectedTip) / pplNum;
    const totalPersonResult = bill / pplNum + tipResult;

    tip.innerText = `$${tipResult.toFixed(2)}`;
    totalPerson.innerText = `$${totalPersonResult.toFixed(2)}`;
  }
}

function errorChech() {
  if (bill === 0 && pplNum === 0) {
    billContainer.classList.add('error');
    numOfPeople.classList.add('error');
    return false;
  } else if (bill === 0) {
    billContainer.classList.add('error');
    return false;
  } else if (pplNum === 0) {
    numOfPeople.classList.add('error');
    return false;
  }
  return true;
}

function cleanActive() {
  tipAmount.forEach((item) => {
    item.classList.remove('active');
  });
}

billInput.addEventListener('change', () => {
  billContainer.classList.remove('error');
  bill = parseFloat(billInput.value);
  if (bill <= 0) {
    billContainer.classList.add('error');
    resetBtn.classList.remove('active');
  }
});

pplNumInput.addEventListener('change', () => {
  numOfPeople.classList.remove('error');
  pplNum = parseFloat(pplNumInput.value);
  if (pplNum <= 0) {
    nmOfPeople.classList.add('error');
    resetBtn.classList.remove('active');
  }
});

tipAmount.forEach((item) => {
  item.addEventListener('click', () => {
    cleanActive();
    customTip.value = '';
    item.classList.add('active');
    selectedTip = parseFloat(item.dataset.tip);

    split();
  });
});

customTip.addEventListener('change', () => {
  cleanActive();
  tipContainer.classList.remove('error');
  selectedTip = parseFloat(customTip.value / 100);

  if (isNaN(selectedTip)) {
    tipContainer.classList.add('error');
  } else {
    split();
  }
});

resetBtn.addEventListener('click', () => {
  if (resetBtn.classList.contains('active')) {
    billInput.value = 0;
    pplNumInput.value = 0;
    bill = 0;
    pplNum = 0;
    tip.innerText = '$0.00';
    totalPerson.innerText = '$0.00';
    cleanActive();
    resetBtn.classList.remove('active');
  }
});
