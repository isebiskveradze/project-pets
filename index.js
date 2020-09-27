const petList = document.querySelector('.pet-list');
const searchInput = document.getElementById('searchinput');
const searchBtn = document.getElementById('searchbtn');


const statement = new Statement('ჩუქდება თეთრი კნუტი, 1 თვის', 'კატა', '0', 'ძალიან საყვარელი', 'whitecat.jpg', 'დემნა', '599 99 99 99', 'თბილისი' )
const statement1 = new Statement('იყიდება ტოი ტერიერი, 2 თვის','ძაღლი', '0', 'ძალიან საყვარელი', 'dog.jpg', 'დემნა', '599 99 99 99', 'თბილისი')
const statement2 = new Statement('იყიდება თუთიყუში, 3 თვის','თუთიყუში', '0', 'ძალიან საყვარელი', 'parrot.jpg', 'დემნა', '599 99 99 99', 'თბილისი')

const statementArray = [statement, statement1, statement2];

const appendStatement = (joni) => {
    const statementTemplate = `            
    <div class="statement">
    <p class="title">${joni.title}</p>
    <p class="title">${'ცხოველი: ' + joni.pet}</p>
    <p class="title">${'ფასი: ' + joni.price}</p>
    <p class="descript">${'დახასიათება: ' + joni.description}</p>
    <img src=${joni.img} alt="" class="statement-img">
    <p class="author-info">ავტორის სახელი:  ${' ' + joni.contactPersonName}</p>
    <p class="author-info">ავტორის ნომერი:  ${' ' + joni.contactPersonNumber}</p>
    <p class="author-info">ავტორის ნომერი:  ${' ' + joni.address}</p>
</div>`;
petList.innerHTML += statementTemplate
 
  
}

// for (let i = 0; i < statementArray.length; i++) {
    
//     var statementArrayAll = appendStatement(statementArray[i]);
    
// }

const appendAllStatements = (statements) => {
    for (const statement of statements) {
        appendStatement(statement);
    }
}

appendAllStatements(statementArray);

// console.log(appendAllStatements);


searchBtn.addEventListener('click', () => {

    petList.innerHTML = ' ';
    if(searchInput.value === ' '){
        appendStatement(appendAllStatements);
        return;
    }
    const filteredArr = appendAllStatements.filter(function(statement){
        // if (statement.title === searchInput.value) {
        //     return true;
            
        // }else{

        //     return false;

        // }
        return statement.title.includes(searchInput.value);
    });

    appendStatement(filteredArr);

   


    });





