const farmAnimals = 'cow horse sheep pig chicken';

// Destructuring the farmAnimals string into individual animals is not directly possible like array or object destructuring.
// However, we can simulate this by first converting the string into an array.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

const [blackAndWhite, , black, pink, ] = farmAnimals.split(' ');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Traditional rainbow color variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Rainbow color variables using initials (Skipping 'i' for Indigo)
const [r, o, y, g, b, , v] = colors;

// Destructuring to declare Indigo using "indg"
const [, , , , , indg, ] = colors;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// Destructuring to assign all appropriate variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Destructuring to assign songs 2 and 4, and Kermit's job and partner
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;