temp = location.href.split("/").reverse();
result = temp[0].split(".");
console.log(result[0]);

const resultName = document.querySelector('.result-name');
resultName.innerHTML = infoList[result[0]].name;

const resultDesc = document.querySelector('.result-description');
resultDesc.innerHTML = infoList[result[0]].description;