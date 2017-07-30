'use strict';

module.exports = function countSameElements(collection) {
  var same=[];
  let collects =new Set(collection);
  let keys=Array.from(collects.keys());
  for(var value of keys){
  	let count =0;
  	for(var i in collection){
  		if(collection[i]==value) count++;
  	}
  	let temp = {};
  	temp.key = value;
  	temp.count = count;
  	same.push(temp);
  }
  return same;
}