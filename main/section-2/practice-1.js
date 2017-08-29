'use strict';

module.exports = function countSameElements(collection) {
  var same=[];
  let collects =new Set(collection);
  let keys=Array.from(collects.keys());

    keys.forEach(function(v1,i1,a1){
      let count = 0;
      collection.forEach(function(v2,i2,a2){
        if(v1==v2) count++;
      });
      let temp = {};
      temp.key = v1;
      temp.count = count;
      same.push(temp);
    });

  return same;
}
