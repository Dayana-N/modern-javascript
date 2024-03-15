const library = [
  {
    title: 'Diddly Squat: Pigs Might Fly',
    author: 'Jeremy Clarkson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Surviving to drive',
    author: 'Guenther Steiner',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Round the Bend',
    author: 'Jeremy Clarkson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

// Step3
const { title: firstBook } = library[0];
console.log(firstBook);

// Step4

const obj = JSON.stringify(library);
console.log(obj);
