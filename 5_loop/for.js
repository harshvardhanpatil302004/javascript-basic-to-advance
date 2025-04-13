// for

// for (let i = 0; i < 10; i++) {
//     console.log(i);
      
// }

// for (let i = 0; i < 10; i++) {
//     const element=i;
//     if (element==5){
//         console.log("5 is the best number");

//     }
//     console.log(element);
      
// }

for (let i = 0; i < 10; i++) {
    // console.log(`outer loop${i}`);
    for (let j = 0; j <10; j++) {
        // console.log(`inner loop$${j} and oi loop${i}`);
        // console.log(i +`*`+j+`=`+i*j);
        
        ;
        
    }
}

// let myArray=["flash","superman","batman"]
// for (let i = 0; i < myArray.length; i++)// if i++ not written it will print flash till infinity
//  {
//     const element = myArray[i];
//     console.log(element);
    
// }


// Break and continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
       console.log("detected") 
       break;
        }
        console.log(`value of i is ${i}`);
    }

for (let i = 0; i < 10; i++) {
    if (i == 5) {
       console.log("detected") 
       continue;
        }
        console.log(`value of i is ${i}`);
    }