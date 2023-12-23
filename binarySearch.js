function binarySeach(array,item){
    // the array parameter takes the argument of an array that we are searching in
    // the item parameter take the target argument 
    // the array should be sorted
    let leftIndex = 0;
    let rightIndex = array.length -1;
     while(leftIndex <= rightIndex){
        let midpoint = Math.floor((leftIndex + rightIndex)/2);
        if(item == array[midpoint]){
            return midpoint;
        }
        else if(item < array[midpoint]){
            rightIndex = midpoint - 1;
        }
        else{
            leftIndex = midpoint + 1;
        }
     }
     return -1;

}
let num = [1,2,3,4,5,6,8];
console.log(binarySeach(num,4));