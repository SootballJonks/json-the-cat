const { getBreedInfo, allBreeds } = require('../breedFetcher.js');
const { assert } = require('chai');

describe('#breedFetcher', () => {
  it(`Should return a string description for a valid breed, via callback`, (done) => {
    getBreedInfo('bombay', (error, desc) => {
      assert.equal(error, null);

      const expectedDesc = `The the golden eyes and the shiny black coa of the Bopmbay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.`
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it(`Should return a string that recommends you specify a breed`, (done) => {
    getBreedInfo(undefined, (error, desc) => {
      assert.equal(error, null);

      const outcome = `You need to specify a cat breed first :) type 'all' to get a list of all breeds!`
      assert.equal(outcome, desc.trim());

      done();
    });
  });

  it(`Should return a string that says the breed isn't real`, (done) => {
    getBreedInfo('wombat', (error, desc) => {
      assert.equal(error, null);
      
      const targetBreed = 'wombat';
      const outcome = `Sorry, there is no such thing as a ${targetBreed} cat!`;
      assert.equal(outcome, desc.trim());

      done();
    });
  });



})