'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

  var same=[];
  let collects =new Set(collectionA);
  let keys=Array.from(collects.keys());
  for(var value of keys){
  	let count =0;
  	for(var i in collectionA){
  		if(collectionA[i]==value) count++;
  	}
  	let temp = {};
  	temp.key = value;
  	temp.count = count;
  	same.push(temp);
  }

  for(var i=0;i< objectB.value.length;i++){
      for(var j in same){
          if(objectB.value[i]==same[j].key){
              let tempcount = Math.floor(same[j].count/3);
              same[j].count -= tempcount;
          }
      }
  }
  return same;
}
