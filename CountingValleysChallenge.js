function countingValleys(steps, path) {
    var seaLev = 0;
    var Valleys = 0;
    path.split('').map(step => {
        if(step === 'U'){
            seaLev ++;
            if(seaLev === 0){
                Valleys++;
            }
        }else{
            seaLev--
        }
    })
    return Valleys;
}

console.log(countingValleys(8, "DDUUDDUDUUUD"))