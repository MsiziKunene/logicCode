function squareSum(numbers){
    // let collect = [];
    // collect.push(numbers);
    let controler = 0;
    let sum = 0;

    numbers.forEach(function(ele,index,array){
    // console.log(ele);
    sum += ele*ele
      
    });
    return(sum);
  
  }

  console.log(squareSum([1,2,2]))