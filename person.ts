export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;

  constructor (firstName: string,
               middleName: string,
               lastName: string,
               age: number){
                 
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return `Nome completo: ${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  getBirtdayYear () {
    let date: number = new Date().getFullYear();
    return `Ano de nascimento: ${date - this.age}`;
  }

}