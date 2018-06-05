const Park = function(){
  this.enclosure = [];
}

Park.prototype.add = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeType = function (type) {

  for (var i = 0; i < this.enclosure.length; i++) {
    if(this.enclosure[i].type === type){
      this.enclosure.splice(i,1);
      i-- // Question instructors about a better way ?
    }
  }


  Park.prototype.offspringCount = function (number) {

    results = [];

    for (var i = 0; i < this.enclosure.length; i++) {
      if(this.enclosure[i].noOfOffspring > number){
        results.push(this.enclosure[i]);
      }
    }
    return results;
  };


  Park.prototype.calculateDinosaurPopulationAfterYears = function (years) {

    let count = 0;

    for (var i = 0; i < this.enclosure.length; i++){
      count += (1 + this.enclosure[i].noOfOffspring)**years
    }

    return count;


  };

};

module.exports = Park;
