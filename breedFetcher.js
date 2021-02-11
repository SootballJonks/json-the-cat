const request = require('request');
const breed = process.argv[2];


const allBreeds = () => {
  let breedList = [];
  request(`https://api.thecatapi.com/v1/breeds`, (error, response, body) => {
    if (!error) {
      let data = JSON.parse(body);

      for (let key of data) {
        breedList.push(key.name);
      }
      console.log(breedList);
    } else if (error) {
      console.log(`The following error has occured: `, error);
    }
    if (response.statusCode !== 200) {
      console.log(`Something went wrong; Status code: ${response.statusCode}`);
    }
  });
};

if (breed === 'all') {
  allBreeds();
}


const getBreedInfo = (targetBreed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${targetBreed}`, (error, response, body) => {
    if (!error) {
      let data = JSON.parse(body);
      
      if (data.length === 0) {
        console.log(`Sorry, there is no such thing as a ${targetBreed} cat!`);
      } else {
        console.log(data[0].description);
      }
    }
    if (error) {
      console.log(`The following error has occured: `, error);
    }
    if (response.statusCode !== 200) {
      console.log(`Something went wrong; Status code: ${response.statusCode}`);
    }
  });
};

getBreedInfo(breed);

