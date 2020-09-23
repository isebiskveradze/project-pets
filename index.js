const petList = document.querySelector('.pet-list');


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

for (let i = 0; i < statementArray.length; i++) {
    
    appendStatement(statementArray[i]);
    
}





