
'use strict';

module.exports = function countSameElements(collection) {
  var same=[];
  var ifin={};
  var count;
  var tl;
  let collects =Array.from(new Set(collection));
  collects.forEach(function(v1,i1,a1){
    a1[i1] = a1[i1][0];
  });
    collects.forEach(function(v1,i1,a1){
      count = 0;
      tl=1;
       if(v1 in ifin){
           tl=0;
       }
      collection.forEach(function(v2,i2,a2){
        if(v2[0]==v1){
        if(v2.length==1) count++;
         else{
            let strReg = /[0-9]+/i;
            let match = v2.match(strReg);
            let times = Number(match);
            count += times;
          }

         //
      }
    
    if(tl){
            let temp = {};
    temp.key = v1;
    temp.count = count;
    same.push(temp);
    } 
    ifin[v1] = 1;
      });
  });

  // for(var i in collects){
  //   collects[i] = collects[i][0];
  // } 
  // for(var value of collects){
  //   count =0;
  //   if(value in ifin){
  //     continue;
  //   }
  //   for(var i in collection){
  //     if(collection[i][0]==value){
  //       if(collection[i].length==1) count++;
  //        else{
  //           let strReg = /[0-9]+/i;
  //           let match = collection[i].match(strReg);
  //           let times = Number(match);
  //           count += times;
  //         }


  //        //
  //     }

  //   }
  //   let temp = {};
  //   temp.key = value;
  //   temp.count = count;
  //   same.push(temp);
  //   ifin[value] = 1;
  // }
  return same;
}