'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var same=[];

      collectionA.forEach(function(val1,ind1,arr1){
        collectionB.value.forEach(function(val2,ind2,arr2){
            if(val1.key==val2){
                same.push(val1.key);

            }
        });
    });
  return same;
}