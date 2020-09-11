class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;                                                            
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      // NOT name of Item1
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i].name == 'Sulfuras, Hand of Ragnaros'
      }



//[PRT1 done(line16, ends line18)]
      // if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        // rate of Item1
        if (this.items[i].quality > 0) {
          // name of Item2
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            // rate OF Item2 .  -- If it's not called 'Sulfuras.., then this item is < 1
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
        // else if
      // }
       else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;

          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              // repeated in lines 21-24
              // if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              //   this.items[i].quality = this.items[i].quality - 1;
              // }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
