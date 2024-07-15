function iterateNum(n){
    for(let i=0; i<=n; i++){
        if(i % 2 === 0){
            console.log(`${i} is Even.`);
        }else{
            console.log(`${i} is Odd.`)
        }
    }
}
iterateNum(15);