    
    //THIS ONE IS FINISHED
    function isVowel (value) {
        const VOWELS = ['a','e','i','o','u'];
        // if the value is a single letter string and a vowel
        return value.length === 1 && VOWELS.includes(value) 
    }

    // THIS ONE IS FINISHED
    function countVowels (value) {
        return value.split('').filter(isVowel);
        // possibly add a .dot length at the end?
    }

    //THIS ONE IS NOT FINISHED
    //instructions for byVowelCount: Review the expected behavior of the callback 
    //passed to the sort() method of the Array object and write a 
    //suitable callback named byVowelCount that will allow you to 
    //sort the following array in ascending order by the number of 
    //vowels each element contains:

    function byVowelCount (array) {
        // compare 2 strings, if string has more vowels sort it first
        return array.sort((a,b) => countVowels(a) > countVowels(b));

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


    // THIS ONE IS GIVEN BY PROFESSOR
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
    
    //THIS ONE IS NOT FINISHED: 
    // (5 points) Copy the runningAverage function you wrote in the 
    //“Simple functions” section above into your closures.js file. 
    //Use techniques similar to those used in the nextFibonacci function 
    // to write another version of the runningAverage function named 
    // runningAverage2 so that it works without explicitly creating 
    // any properties of the function object. Test the runningAverage2 
    //function carefully to ensure it functions in a manner identical 
    //to the original runningAverage function.

    const runningAverage2 = (function (value) {
        console.log(value)
        return function(value) {
            console.log('hello')
            if (isNaN(value)) {
                count = 0
                sum = 0
                return NaN
            } 
            count = (this.count || 0) + 1
            sum = (this.sum || 0) + 1
            return sum / count
        }
    }());
    console.log('hi')
    console.log(runningAverage2(300))