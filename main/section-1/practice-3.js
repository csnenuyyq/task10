'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var same=[];

    collectionA.forEach(function(v1,i1,a1){
        collectionB.value.forEach(function(v2,i2,a2){
            if(v1==v2){
                same.push(v1);
            }
        });
    });
  return same;
}