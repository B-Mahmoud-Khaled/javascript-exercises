const repeatString = function(string, num) {
   let containter = "";
   if(num < 0 ) {
      return "ERROR"
   }
   else {
      for (let i = 0; i < num; i++) {
         containter += string;
      }
      return containter;
   };
};


// Do not edit below this line
module.exports = repeatString;
