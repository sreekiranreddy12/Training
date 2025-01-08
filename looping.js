// for(let a=0;a<100;a++){
//     if(a%2==0){
//         console.log(a+ " is a Even number ");
//     }else{
//         console.log(a+ " is a Odd number ");
//  }
// }
// break and continue
for(let i=1;i<=10;i++){
    console.log(i);
    if(i==5){
        break;
    }
}

for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}