function amountToCoins(amount, coins) {
    if(amount === 0){
        return [];
    }
    for(let i=0; i<coins.length; i++){
        if(amount >= coins[i]){
            return [coins[i]].concat(amountToCoins(amount - coins[i], coins));
        }
    }
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
