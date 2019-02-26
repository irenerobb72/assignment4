    function isVowel (value) {
        const VOWELS = ['a','e','i','o','u'];
        // if the value is a single letter string and a vowel
        return value.length === 1 && VOWELS.includes(value) 
    }

    console.log(isVowel('a'))
    console.log(isVowel('basd'))
    console.log(isVowel(2))

    function countValues (value) {
        // const letters = value.split('');
        return value.split('').filter(isVowel);
        // possibly add a .dot length at the end?
    }

    console.log(countValues('asdsdgoek'))
    console.log(countValues('abcdefghijklmnopqrstuvwxyz'))
    console.log(countValues('aeiou'))
    console.log(countValues('aaaaaaaaaaa'))



    function byVowelCount (array) {
        // compare 2 strings, if string has more vowels sort it first
        return array.sort((a,b) => countValues(a) > countValues(b));

    }
    console.log(byVowelCount([
        "aardvark",
        "orangutan",
        "chinchilla",
        "pika",
        "mongoose",
        "komodo",
        "pangolin",
        "emu",
        "penguin",
        "narwhal",
        "manatee"]))


    // // closuress
    // const nextFibonacci = (function () {
    //     let x = 1, y = 1;
    //     return function () {
    //         let hold = x;
    //         x = y;
    //         y = hold + y;
    //         return hold;
    //     }
    // }());
    
    // console.log(nextFibonacci())
    // console.log(nextFibonacci())
    // console.log(nextFibonacci())
    // console.log(nextFibonacci())
    // console.log(nextFibonacci())
    // console.log(nextFibonacci())
    // console.log(nextFibonacci())
    // console.log(nextFibonacci())
    // console.log(nextFibonacci())
    // console.log(nextFibonacci())
    
    
    // function runningAverage(value) {
    //     if (isNaN(value)) {
    //          this.count = 0
    //          this.sum = 0
    //          return NaN
    //     } 
    //     // if this has not been called set it to 0 
    //     this.count = (this.count || 0) + 1
    //     this.sum = (this.sum || 0) + value
    //     return sum/count
    // }
    
    // const runningAverage2 = (function () {
        
        
    // }());
    