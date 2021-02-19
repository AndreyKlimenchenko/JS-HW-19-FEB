const Animals = function (kind, say, animalIndex) {
    this.kind = kind;
    this.say = say;
    this.animalIndex = animalIndex;

    this.isRun = false;
    this.speed = 0;

    this.run = function() {
        if(this.isRun) {
            console.log(`${kind} побежал`);
        }else {
            this.isRun = true;
            this.speed = 4 * this.animalIndex;
            console.log(`${kind} побежал со скоростью ${this.speed}`);
        }
    }
    this.sayHello = function () {
        console.log(`${kind} говорит ${say}`);        
    }
}

const rabbit = new Animals('Заяц', 'fir-fir', 8);
const bear = new Animals('Bear', 'row-row', 17);
const cow = new Animals('Cow', 'meu-meu', 5);

rabbit.run();
rabbit.sayHello();
bear.run();
bear.sayHello();
cow.run();
cow.sayHello();

