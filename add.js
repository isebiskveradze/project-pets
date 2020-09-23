const addBtn = document.getElementById('addbtn');
const title = document.getElementById('title');
const pet = document.getElementById('pet');
const price = document.getElementById('price');
const description = document.getElementById('description');
const imageInput = document.getElementById('image');
const personName = document.getElementById('personName');
const personNumber = document.getElementById('personNumber');
const adress = document.getElementById('adress');

addBtn.addEventListener('click', function(){

    console.log('სათაური: ' + title.value);
    console.log('ცხოველი: ' + pet.value);
    console.log('ფასი: ' + price.value);
    console.log('დახასიათება: ' + description.value);
    console.log('სურათის მისამართი: ' + imageInput.value);
    console.log('გამყიდველის სახელი: ' + personName.value);
    console.log('გამყიდველის ნომერი: ' + personNumber.value);
    console.log('მდებარეობა: ' + adress.value);

})