const assert = require('assert')
const Dinosaur = require('../models/dinosaur.js')

describe("Dinosaur", function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Tyrannosaurus", 5);
  });

  it("Dinosaur has type", function(){
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });

  it("Dinosaur has number of offspring", function(){
    assert.strictEqual(dinosaur.noOfOffspring, 5);
  });

})
