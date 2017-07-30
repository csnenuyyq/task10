'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var same=[];
    for(var i=0;i<collectionA.length;i++){
        for(var j=0;j<collectionB.value.length;j++){
            if(collectionA[i]==collectionB.value[j]){
                same.push(collectionA[i]);
                continue;
            }
        }
    }
  return same;
}