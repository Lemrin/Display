var _ = {
   map: function(list, interatee) {
       for (var i = 0; i < list.length; i++){
         list[i] = interatee(list[i], i, list);
       }
       return list;
   },
   reduce: function(list, interatee, memo) {
       if (!memo) {
           memo = list[0];
           i = 1;
       } else {
           i = 0;
       }
       for (; i < list.length; i++){
           memo = interatee(list[i], memo);
       }
       return memo;
   },
   find: function(list, predicate) {
       for (var i = 0; i < list.length; i++){
         if (predicate(list[i])) {
             return list[i];
         }
       }
       return undefined;
   },
   filter: function(list, predicate) {
     var newList = [];
     for (var i = 0; i< list.length; i++){
        if (predicate(list[i])) {
            newList.push(list[i]);
        }
     }
     return newList;
   },
   reject: function(list, predicate) {
     var newList = [];
     for (var i = 0; i < list.length; i++){
         if (!predicate(list[i])){
             newList.push(list[i]);
         }
     }
    return newList;
   }
 }

console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
