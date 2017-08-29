//'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var same=[];

    collectionA.forEach(function(value,index,array){
        collectionB.forEach(function(val,ind,arr){
            if(value==val){
                same.push(value);
            }
        });
    });
  return same;
}