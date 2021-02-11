const request = require('request');


const allBreeds = (callback) => {
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


const getBreedInfo = (targetBreed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${targetBreed}`, (error, response, body) => {
    if (targetBreed === undefined) {
      callback(null, `You need to specify a cat breed first :) type 'all' to get a list of all breeds!`);
    } else if (!error) {
      let data = JSON.parse(body);
      
      if (data.length === 0) {
        callback(null, `Sorry, there is no such thing as a ${targetBreed} cat!`);
      } else {
        callback(null, data[0].description);
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

module.exports = {
  getBreedInfo,
  allBreeds
};



