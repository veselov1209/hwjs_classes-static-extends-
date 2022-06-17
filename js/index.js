//1. Создайте класс Работника. У каждого объекта обязательно должно быть свойства id, имя, категория и зарплата за месяц.
// создайте следующие методы:
// - вывод информации о зарплате
// - подсчитать заработок за год
// - подсчитать количество работников 
// - *подсчитать сколько выплатили денег всем работникам за год

class Workers {
    static numOfWorkers = 0;
    constructor(id, name, category, salary){
        this.id = id;
        this.name = name;
        this.category = category;
        this.salary = salary;
        Workers.numOfWorkers++;
    }
    salaryInfo(){
        return this.salary;
    }
    salaryOfTheYear(){
       return this.salary*12;
    }
    static getNumOfWorkers(){
        return Workers.numOfWorkers;
    }
}


const worker1 = new Workers(1, 'Sasha', '1 category', 1000);
const worker2 = new Workers(2, 'Vasya', 'high category', 1200);
const worker3 = new Workers(3, 'Ivan', '2 category', 800);



let a = [];
let salaryAllWorkersOfTheEar = 0

a.push(worker1);
a.push(worker2);
a.push(worker3);
console.log(a);


a.forEach((el) => salaryAllWorkersOfTheEar +=el.salaryOfTheYear());
console.log(salaryAllWorkersOfTheEar);

//2. * Создайте класс Совместитель, который наследует Работника. У него есть дополнительные свойства - количество отработанных часов в день, ставка за час. создайте методы:
// - подсчитайте количество денег что зарабатывает за день
// - подсчитайте ему зарплату за меняц (обновив свойство потом у родителя)
// - подсчитайте количество совместителей

class ContractWorkers extends Workers {
    static numOfContractWorkers = 0;
    constructor(id, name, category, salary, hour, rate){
        super(id, name, category, salary);
        this.hour = hour;
        this.rate = rate;
        ContractWorkers.numOfContractWorkers++;
    }
    salaryOfTheDay(){
        return this.hour*this.rate;
    }
    salaryOfTheMonth(){
        this.salary = this.salaryOfTheDay()*25;
        return this.salaryOfTheDay()*25;
    }
    
}

const contractWorker1 = new ContractWorkers(1, 'petya', 'none category', 0, 8, 4.5);
console.log(contractWorker1);
console.log(contractWorker1.salaryOfTheDay());
console.log(contractWorker1.salaryOfTheMonth());
console.log(ContractWorkers.numOfContractWorkers);

