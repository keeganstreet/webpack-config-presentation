interface Person {
  firstName: string;
  lastName: string;
}

const greet = (person: Person) => {
  return `Hello, ${person.firstName} ${person.lastName}`;
};

let user = {
  firstName: 'Jane',
  lastName: 'User'
};

document.body.innerHTML = greet(user);
