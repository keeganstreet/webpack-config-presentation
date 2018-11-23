interface Person {
  firstName: string;
  lastName: string;
}

declare const conference: string;
declare const city: string;

const greet = (person: Person) => {
  return `
    Hello, ${person.firstName} ${person.lastName}.
    I hope you're enjoying ${conference} in ${city}!
  `;
};

let user = {
  firstName: 'Jane',
  lastName: 'User'
};

document.body.innerHTML = greet(user);
