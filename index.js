const { getBreedInfo, allBreeds } = require('./breedFetcher.js');
const breed = process.argv[2];


if (breed === 'all') {
  allBreeds((error, list) => {
    if (error) {
      console.log(`The following error has occured: `, error);
    } else {
      console.log(list);
    }
  });
} else {
  getBreedInfo(breed, (error, desc) => {
    if (error) {
      console.log(`The following error has occured: `, error);
    } else {
      console.log(desc);
    }
  });
  
}



