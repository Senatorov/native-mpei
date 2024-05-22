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

// Добавляем обработчик события на всю таблицу
table.addEventListener('click', (event) => {
  if (['th', 'td'].includes(event.target.tagName.toLowerCase()) && event.shiftKey) {
    const tr = event.target.parentElement;
    tr.remove();
  }
});