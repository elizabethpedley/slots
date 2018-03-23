function slots(quarters, finalNum){
    var winningNumber = Math.trunc(Math.random() * 100);
    while(quarters>0){
        quarters--;
        if(winningNumber === Math.trunc(Math.random() * 100)){
            quarters += Math.floor(Math.random() * 50)+50;
        }
        if(quarters>=finalNum){
            return quarters;
        }
    }
    return quarters;
}