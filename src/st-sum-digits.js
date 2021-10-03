export default function getSumOfDigits(num) {
  // throw new NotImplementedError('Not implemented');
   function innerSum(n){
     let str = n.toString();
     let length = n.toString().length;
     let sum=0;
     let a = 0;
     for (let i = 0; i < length; i++) {
     a = +str[i]
     sum = sum + a;
     }
     return sum;
  }
 let a = innerSum(num);
         if (a > 9) {
        let z = innerSum(a)
        return z;
     } else return a;
  }