
'use strict';

module.exports = function countSameElements(collection) {
  var same=[];
  var ifin={};
  var count;
  let collects =Array.from(new Set(collection));
  for(var i in collects){
    collects[i] = collects[i][0];
  } 
  for(var value of collects){
    count =0;
    if(value in ifin){
      continue;
    }
    for(var i in collection){
      if(collection[i][0]==value){
        if(collection[i].length==1) count++;
         // else if(collection[i][1]=='['){
         //    let num=collection[i].split('[')[1].substring(0,collection[i].split('[')[1].length-1);
         //    count +=Number(num);
         // }else count += Number(collection[i][2]);
         //
         else{
            let strReg = /[0-9]+/i;
            let match = collection[i].match(strReg);
            let times = Number(match);
            count += times;
          }

         //
      }

    }
    let temp = {};
    temp.name = value;
    temp.summary = count;
    same.push(temp);
    ifin[value] = 1;
  }
  return same;
}