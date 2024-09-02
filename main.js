/*
lesson => 134
    Regular Expression
        Email
        IP
        Phone
        URL
*/

/*
lesson => 135
    Regular Expression

    syntax
    /pattern/modifier(s);
    new RegExp("pattern" , "modifier(s)")

    Modifiers => Flags
    i => case-insensitive
    g => gloval
    m => Multilines

    Search Methods
     match(pattern)

    Match
        Matches A String Against a Regular Expression Pattern
        Returns An Array With The Matches.
        Returns null If NO Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/gi;
// حروف غير حساسه كابت ولا سمول هجيب اللي الاقيه الاول عشان انا عديم الاحساس[i]
// بيجب كله اي خاجه تمشي هجيبها [g]

console.log(myString.match(regex));

/*
lesson => 136
    Regular Expression

    Ranes

        Part 1
    (X|Y) => X Or Y
    [0-9] => 0 To 9
    [^0-9] => Any character Not 0 To 9
    Practice

        Part 2
    [a-z]
    [^a-z]
    [A-Z]
    [^A-Z]
    [abc]
    [^abc]

*/

let tid = "com Net Org Info Code Io";
let tidRe = /(org|info|io)/gi;
console.log(tid.match(tidRe));

let nums = "1234578910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

let Notnums = "1234578910";
let NotnumsRe = /[^0-2]/g;
console.log(Notnums.match(NotnumsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));

/*
lesson => 137

*/

let myString2 = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g;
console.log(myString2.match(atozSmall));
console.log(myString2.match(NotAtozSmall));
console.log(myString2.match(atozCapital));
console.log(myString2.match(NotAtozCapital));
console.log(myString2.match(aAndcAnde));
console.log(myString2.match(NotaAndcAnde));
console.log(myString2.match(lettersCapsAndSmall));
console.log(myString2.match(numsAndSpecials));
console.log(myString2.match(specials));

/*
lesson => 138
    Regular Expression
    Character Classes
     . => matches any character , except newline or other line terminators.
     \w => matches word characters. [a-z, A-Z, 0-9 And Underscroe]
     \W => matches Non word characters
     \d => matches digits from 0 to 9.
     \D => matches non-digits from 0 to 9.
     \s => matches Whitespace character.
     \S => matches non Whitespace character.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g; //عديمة الكرامه بتجيب اي حاجه
let word = /\w/g;
let Notword = /\W/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(Notword));
console.log(email.match(valid));

/*
lesson => 139
    Regular Expression
    Character Classes
    \b => matches at the beginning or end of a word.
    \B => matches Not at the begining/end of a word.

    Test Method
    pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(spam\b|\bspam)/gi;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(spam\b|\bspam)/gi.test("osama"));
console.log(/(spam\b|\bspam)/gi.test("1spam"));

/*
lesson => 140
    Regular Expression

    Quantifiers
    n+   => One Or More
    n*   => Zero or more
    n?   => Zero Or One
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; //All Emails
// let maisRe = /\w+@\w+.(com|net)/ig;
let maisRe = /\w+@\w+.\w+/gi;
console.log(mails.match(maisRe));

let nums2 = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let nums2Re = /0\d*0/gi;
console.log(nums2.match(nums2Re));

let urls = "https://google.com http://www.website.net web.com"; //http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

/*
lesson => 141
    Regular Expression

    Quantifiers
    n{x}   => Number of
    n{x,y} => Range
    n{x,y} => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S

/*
lesson => 142
    Regular Expression

    Quatifiers
    $ => End with Somthing
    ^ => Start With Something
    ? => Followed By something
    ?! => Not Followed By Something
    \s = space
*/

let myString3 = "We Love Programming";
let names2 = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString3));
console.log(/^we/gi.test(myString3));
console.log(/lz$/gi.test(names2));
console.log(/^\d/gi.test(names2));

console.log(names2.match(/\d\w{5}(?=Z)/gi));
console.log(names2.match(/\d\w{8}(?!Z)/gi));

/*
lesson => 143
    Regular Expression
    
    replace
    replaceAll
*/

let txt = "we Love Programing And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
let re2 = /@/gi;
console.log(txt.replaceAll("@", "JavaScript"));
console.log(txt.replaceAll(re2, "JavaScript"));

/*
lesson => 144
    Regular Wxpression
        Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910;
  let validationResult = phoneRe.test(phoneInput);
  console.log(validationResult);
   
  if(validationResult === false){
    return false;
  }
 return ture;
};

// انا بتجاهل بالباك سلاش

/*
lesson => 145

*/

/*
lesson => 146
    Regular Expression
        Challange
        we will solve it in assignment 🐄
*/

