import {Person} from './person';

// Write TypeScript code!

let person = new Person ("Victhória Andrea", "Rocha", "Nunes", 28);

const appfullName: HTMLElement = document.getElementById('app.fullName');
appfullName.innerHTML = person.getFullName();

const appbirthdayYear: HTMLElement = document.getElementById('app.birthdayYear');
appbirthdayYear.innerHTML = person.getBirtdayYear();