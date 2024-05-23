// 3 задание 1
const buttonPromt = document.getElementById('promt');
let listLi = [];

function getPromt() {
  return prompt('Введите значение нового элемента:');
}

buttonPromt.addEventListener('click', function() {
  let element = getPromt();

  while (element.trim().length !== 0) {
    listLi.push(element);
    element = getPromt();
  }
  
  let ul = document.createElement('ol');
  let container = document.getElementById('list');
  for (let index in listLi) {
    let li = document.createElement('li');
    li.innerText = listLi[index];
    ul.appendChild(li);  
  }

  container.innerHTML = ''
  container.appendChild(ul);
});


// 3 задание 2
const buttonToCount = document.getElementById('toCount');
buttonToCount.addEventListener('click', function () {
  const containerListToCount = document.getElementById('listToCount');
  const liTags = containerListToCount.querySelectorAll('li');

  for (index = 0; index < liTags.length; ++index) {
    let li = liTags[index];
    let nextElemnt = li.nextElementSibling;
    if (nextElemnt !== null && nextElemnt.nodeName === 'UL') {
      let innerLi = nextElemnt.querySelectorAll('li');
      let textLi = li.innerText;
      li.innerText = `${textLi} (${innerLi === null ? 0 : innerLi.length})`;
    }
  }
});

// 4 задание 1 пункт
const containerForVisuallyImpaired = document.getElementById('visually-impaired');
function setColor(setting) {
  let color = '#000000';
  let backgroundColor = '#F0F0F0';

  switch(setting) {
    case 'black':
      color = '#F0F0F0';
      backgroundColor = '#000000';
      break;
    case 'blue':
      color = '#063462';
      backgroundColor = '#9DD1FF';
      break;
    case 'grey':
      color = '#4D4B43';
      backgroundColor = '#F7F3D6';
      break;
    case 'green':
      color = '#A9E44D';
      backgroundColor = '#3B2716';
      break;
    default:
      break;
  }

  containerForVisuallyImpaired.style.color = color; 
  containerForVisuallyImpaired.style.backgroundColor = backgroundColor; 
}

function setFontSize(size) {
  containerForVisuallyImpaired.style.fontSize = `${size}pt`; 
}

// 4 задание 2 пункт
const table = document.getElementById('table-4');
table.addEventListener('click', (event) => {
  if (['th', 'td'].includes(event.target.tagName.toLowerCase()) && event.shiftKey) {
    const tr = event.target.parentElement;
    tr.remove();
  }
});

// 7 задание 1 пункт
//return («дней-часов-минут»).
function getUntilNewYear() {
  const currentDate = new Date()
  const newYearDate = new Date(`January 1, ${currentDate.getFullYear() + 1} 00:00:00`);
  // тут ответ в милисекундах, поэтому умножаем на 1000
  const timeDiff = newYearDate - currentDate;

  const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  return `${daysRemaining}Days - ${hoursRemaining}Hours - ${minutesRemaining}Min`;
}
const buttonUntilNewYear = document.getElementById('getUntilNewYear');
buttonUntilNewYear.addEventListener('click', function () {
  alert('Until the new year ' + getUntilNewYear())
});

// 8 задание
const calendar = document.getElementById('calendar');
calendar.addEventListener('submit', function(e) {
  e.preventDefault();
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;
  
  const normalizadeMonth = Number(month.trim());
  const normalizadeYear  = Number(year.trim());

  const danger = document.getElementById('alert-table');
  danger.style.display = 'none';

  try {
    checkNumberDate(normalizadeMonth);
    checkMonth(normalizadeMonth);
    checkNumberDate(normalizadeYear);
  } catch (e) {
    danger.style.display = 'block';
    table.style.display = 'none';
    const alertText = document.getElementById('text-error');
    alertText.innerText = e.message;
    return;
  }

  const daysInMonth = new Date(normalizadeYear, normalizadeMonth, 0).getDate();
  const firstDayMonth = new Date(normalizadeYear, normalizadeMonth - 1, 1).getDay() - 1;


  const table = document.getElementById('table-calendar');
  table.style.display = 'table';
  const tbody = document.getElementById('tbody-calendar');  
  tbody.innerHTML = '';
  let tr = document.createElement('tr');
  tr.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700');
  
  for (let i = 1; i <= daysInMonth + firstDayMonth; i++) {
    let td = document.createElement('td');
    td.innerText = i <= firstDayMonth ? '' : i - firstDayMonth;
    td.classList.add('px-6', 'py-4');
    tr.appendChild(td);

    if (i % 7 === 0) {
      tbody.appendChild(tr);
      tr = document.createElement('tr');
      tr.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700');
    }
  }
  tbody.appendChild(tr);
});

function checkNumberDate(numberDate) {
  if (isNaN (numberDate) || !Number.isInteger(numberDate) || numberDate <= 0) {
    throw new Error('incorrect data has been sent');
  }
}

function checkMonth(month) {
  if (month > 12) {
    throw new Error('incorrect month');
  }
}