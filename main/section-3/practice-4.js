'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {


	 let same=[];
  var count;
  let collects =new Set(collectionA);
  let keys=Array.from(collects.keys());
  for(var value of keys){
  	count =0;
  	for(var i in collectionA){
  		if(collectionA[i][0]==value[0]){
  			if(value.length==1) count++;
  			 else count=count + Number(value[value.length-1]);
  		}

  	}
  	let temp = {};
  	temp.key = value[0];
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
