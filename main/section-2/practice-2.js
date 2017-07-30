'use strict';

module.exports = function countSameElements(collection) {
  let same=[];
  var count;
  let collects =new Set(collection);
  let keys=Array.from(collects.keys());
  for(var value of keys){
  	count =0;
  	for(var i in collection){
  		if(collection[i][0]==value[0]){
  			if(value.length==1) count++;
  			 else count=count + Number(value[value.length-1]);
  		}

  	}
  	let temp = {};
  	temp.key = value[0];
  	temp.count = count;
  	same.push(temp);
  }
  return same;
}