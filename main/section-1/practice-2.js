'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var same=[];
   
    collectionA.forEach(function(val1,ind1,arr1){
        collectionB[0].forEach(function(val2,ind2,arr2){
            if(val1==val2){
                same.push(val1);

            }
        });
    });
  return same;
}