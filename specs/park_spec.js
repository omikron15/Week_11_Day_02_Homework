const assert = require('assert')
const Park = require('../models/park.js')
const Park = require('../models/dinosaur.js')

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
