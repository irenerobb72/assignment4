    function isVowel (value) {
        vowels = 'aeiouAEIOU'
        // if the value is a single letter string and a vowel
        if(value.length == 1 && vowels.includes(value) ){
            return true
        } else {
            return false
        }
    }

    console.log(isVowel('a'))
    console.log(isVowel('basd'))
    console.log(isVowel(2))

    function countValues (value) {
        letterList = [];
        vowelCount = 0;
        for (let i = 0; i < value.length; i++){
            letterList.push(value[i].split());
        }
        vowelList = letterList.filter(isVowel);
        for (let j = 0; j < vowelList.length; j++){
            vowelCount++;
        }
        return vowelCount;
    }

    console.log(countValues('asdsdgoek'))
    console.log(countValues('abcdefghijklmnopqrstuvwxyz'))
    console.log(countValues('aeiou'))
    console.log(countValues('aaaaaaaaaaa'))


    function byVowelCount (array) {
        return array.sort()
    }
    console.log(byVowelCount())


    // closuress
    const nextFibonacci = (function () {
        let x = 1, y = 1;
        return function () {
            let hold = x;
            x = y;
            y = hold + y;
            return hold;
        }
    }());
    
    console.log(nextFibonacci())
    console.log(nextFibonacci())
    console.log(nextFibonacci())
    console.log(nextFibonacci())
    console.log(nextFibonacci())
    console.log(nextFibonacci())
    console.log(nextFibonacci())
    console.log(nextFibonacci())
    console.log(nextFibonacci())
    console.log(nextFibonacci())
    
    
    function runningAverage(value) {
        if (isNaN(value)) {
             this.count = 0
             this.sum = 0
             return NaN
        } 
        // if this has not been called set it to 0 
        this.count = (this.count || 0) + 1
        this.sum = (this.sum || 0) + value
        return sum/count
    }
    
    const runningAverage2 = (function () {
        
        
    }());
    