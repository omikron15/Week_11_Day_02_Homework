const assert = require('assert')
const Park = require('../models/park.js')
const Dinosaur = require('../models/dinosaur.js')

describe("Dinosaur", function(){

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 5);
    dinosaur2 = new Dinosaur("Velociraptor", 1);
    dinosaur3 = new Dinosaur("Triceratops", 3);
  });

  it("Park starts with empty enclosure", function(){
    assert.strictEqual(park.enclosure.length, 0);
  });

  it("Can add dinosaur to enclosure", function(){
    park.add(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
  });

  it("Remove dinosaurs of same type", function(){
    park.add(dinosaur1);
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    park.removeType("Tyrannosaurus");
    assert.strictEqual(park.enclosure.length, 2);
  });

  it("Get all dinosaur with offspring rate bigger than 2", function(){
    results = [];
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    results = park.offspringCount(2);
    assert.strictEqual(results.length, 2);
  });

  it("Get all dinosaur with offspring rate bigger than 4", function(){
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    const results = park.offspringCount(4);
    assert.strictEqual(results.length, 1);
  });

  it("Calculate dinosaur population over 1 year with 1 dinosaur", function(){
    park.add(dinosaur1);
    result = park.calculateDinosaurPopulationAfterYears(1)
    assert.strictEqual(result, 6);
  });

  it("Calculate dinosaur population over 2 year with 1 dinosaur", function(){
    park.add(dinosaur1);
    result = park.calculateDinosaurPopulationAfterYears(2)
    assert.strictEqual(result, 36);
  });

  it("Calculate dinosaur population over 3 year with 1 dinosaur", function(){
    park.add(dinosaur1);
    result = park.calculateDinosaurPopulationAfterYears(3)
    assert.strictEqual(result, 216);
  });

  it("Calculate dinosaur population over 1 year with 2 dinosaur", function(){
    park.add(dinosaur1);
    park.add(dinosaur3);
    result = park.calculateDinosaurPopulationAfterYears(1)
    assert.strictEqual(result, 10);
  });

  it("Calculate dinosaur population over 2 year with 2 dinosaur", function(){
    park.add(dinosaur1); //36
    park.add(dinosaur3); //16
    result = park.calculateDinosaurPopulationAfterYears(2)
    assert.strictEqual(result, 52);
  });


})
