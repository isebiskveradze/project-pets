class Statement{
    constructor(contactPersonName, contactPersonNumber, address, description, pet, price, title, img ){

        this.contactPersonName = contactPersonName;
        this.contactPersonNumber = contactPersonNumber;
        this.address = address;
        this.description = description;
        this.pet = pet;
        this.price = price;
        this.title = title;
        this.img = img;
        
    }
}


class Pet{
constructor(category, age, gender ){

    this.category = category;
    this.age = age;
    this.gender = gender;

}
}
class Cat extends Pet{

    constructor(category, age, gender, toiletFrendly, vaccination){
        super(category, age, gender);
        this.toiletFrendly = toiletFrendly;
        this.vaccination = vaccination;

    }

}

class Dog extends Pet {
    constructor(category, age, gender, toiletFrendly, noisy, vaccination){
        super(category, age, gender)
        this.toiletFrendly = toiletFrendly;
        this.noisy = noisy;
        this.vaccination = vaccination;

    }
}

class Bird extends Pet {
    constructor(category, age, gender, noisy, humanFriendly ){
        super(category, age, gender);
        this.noisy = noisy;
        this.humanFriendly = humanFriendly;

    }
}
class Rabbit extends Pet {
    constructor(category, age, gender, humanFriendly){
        super(category,age, gender);
        this.humanFriendly = humanFriendly;
    }
}
class Fish extends Pet {
    constructor(category, age, gender, coldWater, warmWater, predator, peaceful){
        super(category,age, gender);
        this.coldWater = coldWater;
        this.warmWater = warmWater;
        this.predator = predator;
        this.peaceful = peaceful;
    }
}
class hamster extends Pet {
    constructor(category, age, gender, humanFriendly){
        super(category,age, gender);
        this.humanFriendly = humanFriendly;
    }
}

const statement = new Statement( 'დემნა', '599 99 99 99', 'თბილისი', 'ძალიან საყვარელი', null, 0, 'ჩუქდება თეთრი კნუტი, 1 თვის', null )


