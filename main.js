//The choices:
const msg1 = ["Kill " , "Die with " , "Sing to " , "Call upon " , "Summon " , "Ride along " , "Destroy " , 
              "Protect " , "Eat " , "Throw away " , "Burn " , "Paint " , "Suck off " , "Teach tax evasion to " , "Be a horrible father figure to "];

const msg2 = ["a dog, " , "a cat, " , "a human, " , "a baby, ", "a politician, " , "an alien, " , "a fortnite kid, " , "an underage child, " , "a horse, " ,
              "an illegal immigrant, " , "Elon Musk, " , "Michael Jackson, " , "a hungry African child, " , "Peter Griffin, " , "a depressed teenager, "];

const msg3 = ["you must." , "you must not."];

//Choose one random string from each of the 3 arrays and then return those 3 choices as a single array.
const randomChoice = (arr1,arr2,arr3)=>{
    const str1 = arr1[Math.floor(Math.random() * arr1.length)];
    const str2 = arr2[Math.floor(Math.random() * arr2.length)];
    const str3 = arr3[Math.floor(Math.random() * arr3.length)];
    return [str1,str2,str3];
}

//Output the final message by joining the three strings.
const outputMessage = (arr)=>{
    return "Yoda Says: " + arr[0] + arr[1] + arr[2];
}

//print to the console, the result of the randomchoice function passed into outputmessage.
console.log(outputMessage(randomChoice(msg1,msg2,msg3)));