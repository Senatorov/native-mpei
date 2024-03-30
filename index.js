// 3 задание 1-2
const button = document.getElementById('promt');
let list = {};

button.addEventListener('click', function() {
  let firstLevel = prompt('Введите значение для списка 1 уровня:');
  if (firstLevel) {
    list[firstLevel] = list.hasOwnProperty(firstLevel) ? list[firstLevel] : {};

    let secondLevel = prompt('Введите значение для списка 2 уровня:');
    if (secondLevel) {
      list[firstLevel][secondLevel] = list.hasOwnProperty(secondLevel) ? list[firstLevel][secondLevel] : [];

      let thirdLevel = prompt('Введите значение для списка 3 уровня:');
      while (thirdLevel) {
        list[firstLevel][secondLevel].push(thirdLevel);
        thirdLevel = prompt('Введите значение для списка 3 уровня:');
      }
    }
  }

  let ul = document.createElement('ul');
  let container = document.getElementById('list');

  for (let keyFirstLevel in list) {
    let li = document.createElement('li');
    li.textContent = keyFirstLevel + ' - ' + getCountElements(list[keyFirstLevel]);
    ul.appendChild(li);

    let ulSecond = document.createElement('ul'); 
    for (let keySecondLevel in list[keyFirstLevel]) {
      let liSecond = document.createElement('li'); 
      liSecond.textContent = keySecondLevel + ' - ' + getCountElements(list[keyFirstLevel][keySecondLevel]);
      ulSecond.appendChild(liSecond);
      
      let ulThird = document.createElement('ul'); 
      for (let element in list[keyFirstLevel][keySecondLevel]) {
        let liThird = document.createElement('li'); 
        liThird.textContent = element;
        ulThird.appendChild(liThird);
      }
      ulSecond.appendChild(ulThird);
      
    }
    ul.appendChild(ulSecond);

  }

  container.innerHTML = ''
  container.appendChild(ul);
});

function getCountElements(elements) {
  let counter = 0;
  if (!Array.isArray(elements)) {
    for (let element in elements) {
      counter++;
      counter += elements[element].length;
    }
  } else {
    counter += elements.length;
  }
  return counter;
}




// 3 задание 3
const response = {
    "data": [
       {
          "name": "MacBook Pro",
          "brand": "Apple",
          "cost": 95000,
          "quantity": 7
       },
       {
          "name": "Galaxy A15",
          "brand": "Samusng",
          "cost": 12500,
          "quantity": 15
       },
       {
          "name": "Iphone X",
          "brand": "Apple",
          "cost": 72000,
          "quantity": 12
       },
       {
          "name": "Acer Aspire 3",
          "brand": "Acer",
          "cost": 35990,
          "quantity": 1
       },
       {
          "name": "LaserJet 1100",
          "brand": "HP",
          "cost": 17800,
          "quantity": 9
       }
    ]
 };
 
 const tableContent = document.getElementById("table-content")
 const tableButtons = document.querySelectorAll("th button");
 
 const createRow = (obj) => {
   const row = document.createElement("tr");
   const objKeys = Object.keys(obj);
   objKeys.map((key) => {
     const cell = document.createElement("td");
     cell.classList.add("border", "px-4", "py-2");
     cell.setAttribute("data-attr", key);
     cell.innerHTML = obj[key];
     row.appendChild(cell);
   });
   return row;
 };
 
 const getTableContent = (data) => {
   data.map((obj) => {
     const row = createRow(obj);
     tableContent.appendChild(row);
   });
 };
 
 const sortData = (data, param, direction = "asc") => {
   tableContent.innerHTML = '';
   const sortedData =
     direction == "asc"
       ? [...data].sort(function (a, b) {
           if (a[param] < b[param]) {
             return -1;
           }
           if (a[param] > b[param]) {
             return 1;
           }
           return 0;
         })
       : [...data].sort(function (a, b) {
           if (b[param] < a[param]) {
             return -1;
           }
           if (b[param] > a[param]) {
             return 1;
           }
           return 0;
         });
 
   getTableContent(sortedData);
 };
 
 const resetButtons = (event) => {
   [...tableButtons].map((button) => {
     if (button !== event.target) {
       button.removeAttribute("data-dir");
     }
   });
 };
 
 window.addEventListener("load", () => {
   getTableContent(response.data);
 
   [...tableButtons].map((button) => {
     button.addEventListener("click", (e) => {
       resetButtons(e);
       if (e.target.getAttribute("data-dir") == "desc") {
         sortData(response.data, e.target.id, "desc");
         e.target.setAttribute("data-dir", "asc");
       } else {
         sortData(response.data, e.target.id, "asc");
         e.target.setAttribute("data-dir", "desc");
       }
     });
   });
 });





//  4 задание
// const table = document.getElementById('myTable');
// const rows = table.getElementsByTagName('tr');
// let lastSelectedRow = null;

// for(let i = 0; i < rows.length; i++) {
//   rows[i].addEventListener('click', function(event) {
//     if (event.shiftKey) {
//       this.parentNode.removeChild(this);
//     }
//   });
// }
