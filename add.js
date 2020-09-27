
// console.log(imgArea)

const statementDiv = document.getElementById('statementdiv');

var input = document.querySelector("#file-input");
const addBtn = document.getElementById('addbtn');

const title = document.getElementById('title');
const pet = document.getElementById('pet');
const price = document.getElementById('price');
const description = document.getElementById('description');
const imageInput = document.getElementById('file-input');
const personName = document.getElementById('personName');
const personNumber = document.getElementById('personNumber');
const address = document.getElementById('adress');
var input = document.querySelector("#file-input");
document.getElementById('inputimgbutton')

// inputimgbutton.addEventListener("click", function () {
//     console.log(input.value)
//   }); 
  input.addEventListener("change", preview);
  function preview() {
  var fileObject = this.files[0];
  var fileReader = new FileReader();
  
  
  
addBtn.addEventListener("click", function () {
    const statementTemplate = `            
<div id="imgArea">
 <div id="box1">
    <p>სათაური:  ${title.value}</p>
    <img  alt="" class="statement-img" id="preview">
  </div>
  <div id="box2">  
    <p>ცხოველი:  ${pet.value}</p>
    <p>ფასი:  ${price.value}</p>
    <p>დახასიათება:  ${description.value}</p>
    <p>გამყიდველის სახელი:  ${personName.value}</p>
    <p>გამყიდველის ნომერი:  ${personNumber.value}</p>
    <p>მდებარეობა:  ${adress.value}</p>
    </div>
</div>`;
    statementDiv.innerHTML += statementTemplate;
    fileReader.readAsDataURL(fileObject);

    fileReader.onload = function () {
        var result = fileReader.result;
        var img = document.querySelector("#preview");
        img.setAttribute("src", result);
        console.log(img);
        };
 


console.log('სათაური: ' + title.value);
console.log('ცხოველი: ' + pet.value);
console.log('ფასი: ' + price.value);
console.log('დახასიათება: ' + description.value);
console.log('სურათის მისამართი: ' + imageInput.value);
console.log('გამყიდველის სახელი: ' + personName.value);
console.log('გამყიდველის ნომერი: ' + personNumber.value);
console.log('მდებარეობა: ' + adress.value);


});
};

// input.click();
// const newStatement = new Statement (title.value, pet.value, price.value, description.value, imageInput.value, personName.value, personNumber.value, address.value);
// imageInput.innerHTML("src", result);






// addBtn.addEventListener('change', function(){

    

//     console.log(newStatement);

//     const appendStatement = (joni) => {
       
    
     
      
//     }
    
//     appendStatement(newStatement);

    

    

    

 


// });







