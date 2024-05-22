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

