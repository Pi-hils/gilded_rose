'use strict'

// var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  let gilded_rose =  

  // beforeEach(function() {
  //   const gilded_Rose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 0) ]);
  //   // const items = new Items
  // })

  it("has an items called Sulfuras", function(){
    expect(newFunction(gilded_rose)).toBe("Sulfuras, Hand of Ragnaros");
  });

  // it("should foo", function() {
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });

  // it("should have name", function(){
  //   const items = new Items;
  //   expect
  // })
});
function newFunction(gilded_rose) {
  return gilded_rose.names;
}

