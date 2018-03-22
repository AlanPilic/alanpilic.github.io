/* Hi Shawn here is some Javascript samples as a proof of concept in a sense, I couldn't find the exact Javascript I worked on at the previous company as there weren't many
opportunities to write extensive Javascript. Let me know if you have any more questions or any questions about the code, cheers Alan. */

/* calculate function for calculating compounded interest, takes simple input and then applys mathematical compound formula */
function calculate()
{

        var principal = document.getElementById("principal").value;

        var yearsGrow = document.getElementById("yearsGrow").value;

        var interestRate = document.getElementById("interestRate").value;

        var divideBy100 = interestRate / 100;

        var output = "";

        var ratePerYearAddiotion = Math.pow((1 + divideBy100), yearsGrow);
        
        output = principal * ratePerYearAddiotion;

        /* best solution for reg ex based on stack overflow, can be overly complex since there are many factors to consider for input especially if you
        take localization into account, even this solution is not adequate as there are rest apis specifically for these type of inputs. */
        Number.prototype.formatMoney = function(c, d, t){
        var n = this, 
            c = isNaN(c = Math.abs(c)) ? 2 : c, 
            d = d == undefined ? "." : d, 
            t = t == undefined ? "," : t, 
            s = n < 0 ? "-" : "", 
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
            j = (j = i.length) > 3 ? j % 3 : 0;
           return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
         };

         output = "$" + (output).formatMoney(2, '.', ',');

        document.getElementById("result").innerHTML = output;
}

/* checks to see if a string is a palindrome, a palindrome is a word spelled the same way forward as backwards */
function palindrome(){

var originalString = document.getElementById('string').value;

/* remove special characters, spaces and make lowercase*/
var removeChar = originalString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

/* reverse removeChar for comparison*/
var checkPalindrome = removeChar.split('').reverse().join('');
  
/* Check to see if myString is a Palindrome*/
    if(removeChar === checkPalindrome){

            var output = originalString + " is a Palindrome.";

            document.getElementById("isPalindrome").innerHTML = output;
      
    }else{

            var output = originalString + " is not a Palindrome.";

            document.getElementById("isPalindrome").innerHTML = output;

    }

}


/* simple login validation that allows three attempts login and then locks you out */
function loginValid(){


        var username = document.getElementById("userName").value;
        var password = document.getElementById("password").value;

        if(userName == "" || password == ""){
          alert("A value must be entered, cannot be null");
        }

        if ( username == "user" && password == "123456"){
        alert ("Congrats you got the password right!");
        window.location = "https://en.wikipedia.org/wiki/List_of_the_most_common_passwords"; // Redirecting to other page.
        return false;
        }
        else{
        passwordGuessingCounter.deductAttempt(1);// Decrementing by one.
        if(passwordGuessingCounter.value() === 1) {
            alert("You have " + passwordGuessingCounter.value() +" attempt left");
        }
        else if(passwordGuessingCounter.value() === 0) {
            alert("You have " + passwordGuessingCounter.value() +" attempts left, should of gone with the hint");
        }
        else {
            alert("You have " + passwordGuessingCounter.value() +" attempt left;");
        }
        // Disabling fields after 3 attempts.
                if( passwordGuessingCounter.value() === 0){
                document.getElementById("userName").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("login").disabled = true;
                return false;
                }

        }
        
}

/* private closure function for deducting attempts made at login */
var passwordGuessingCounter = (function() {

          var attempts = 3;

          function deductValue(val) {
            attempts = attempts - val;
          }

          return {

            deductAttempt: function() {
              deductValue(1);
            },
            value: function() {
              return attempts;
            }

           };

})();

/* stats for hero for the paper game */
function heroStats() {

    var hero = {
        "job": "Warrior",
        "health": 100
    };

    var sword = {
        "name": "Stone sword",
        "oneHandedDmg": 10
    };


    document.getElementById("swordButton").disabled = false;
    document.getElementById("monsterButton").disabled = false;
    

    stats = [hero, sword];

    document.getElementById("heroClass").value = hero.job;
    document.getElementById("heroHealth").value = hero.health;
    document.getElementById("heroSwordName").value = sword.name;
    document.getElementById("heroOne").value = sword.oneHandedDmg;


    heroObjects.innerHTML = JSON.stringify(stats); 

    if(monsterStats !== "" && stats !== "") {
        document.getElementById("engage").style.display = "inline-block";
    }


}

/* function for rolling for a new sword for the hero */
function getNewSword() {

        var swordB = {
        "name": "Iron Sword",
        "oneHandedDmg": 11
        };
        var swordC = {
        "name": "Steel Sword",
        "oneHandedDmg": 12
        };
        var swordD = {
        "name": "Silver Sword",
        "oneHandedDmg": 13
        };
        var swordE = {
        "name": "Gold Sword",
        "oneHandedDmg": 14
        };
        var excalibur = {
        "name": "Excalibur",
        "oneHandedDmg": 100
        };

        var getSword = getRandomIntInclusive(1,5);

        stats.pop();

        switch (getSword) {
            case 1:
                stats.push(swordB);
                break; 
            case 2:
                stats.push(swordC);
                break;
            case 3:
                stats.push(swordD);
                break;
            case 4:
                stats.push(swordE);
                break;
            case 5:
                stats.push(excalibur);
                alert("You have attainted the mighty sword from the stone!");
                break;
            default:
                break;
        }

        document.getElementById("heroSwordName").value = stats[1].name;
        document.getElementById("heroOne").value = stats[1].oneHandedDmg;

        heroObjects.innerHTML = JSON.stringify(stats);

}

/* randomizer function */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* monster function for populating monster in paper game */
function getNewMonster() {

    var monster1 = {
        "name": "Gob",
        "job": "Goblin",
        "health": 100,
        "weapon": "Claws",
        "oneHandedDmg": 10
    };

    var monster2 = {
        "name": "Troll",
        "job": "Troll",
        "health": 150,
        "weapon": "Claws",
        "oneHandedDmg": 15
    };

    var monster3 = {
        "name": "Bran",
        "job": "Bandit",
        "health": 130,
        "weapon": "Sword",
        "oneHandedDmg": 13
    };

    var monster4 = {
        "name": "Gol",
        "job": "Golem",
        "health": 200,
        "weapon": "Fists",
        "oneHandedDmg": 20
    };

    var monster5 = {
        "name": "Nogard",
        "job": "Dragon",
        "health": 300,
        "weapon": "Claws",
        "oneHandedDmg": 30
    };

    monsterStats = [monster];


    var getMonster = getRandomIntInclusive(1,5);

    monsterStats.pop();

    switch (getMonster) {
        case 1:
            monsterStats.push(monster1);
            break; 
        case 2:
            monsterStats.push(monster2);
            break;
        case 3:
            monsterStats.push(monster3);
            break;
        case 4:
            monsterStats.push(monster4);
            break;
        case 5:
            monsterStats.push(monster5);
            break;
        default:
            break;
    }


    /* change values in input fields based on monsters in array */
    document.getElementById("monster").value = monsterStats[0].name;
    document.getElementById("monsterClass").value = monsterStats[0].job;
    document.getElementById("monsterHealth").value = monsterStats[0].health;
    document.getElementById("monsterWeapon").value = monsterStats[0].weapon;
    document.getElementById("monsterDmgOne").value = monsterStats[0].oneHandedDmg;

    monsterObjects.innerHTML = JSON.stringify(monsterStats); 

    if(monsterStats !== "" && stats !== "") {
        document.getElementById("engage").style.display = "inline-block";
    }

}

/* combat logic for the little paper game */
function engage() {

    var heroHealth = stats[0].health;
    var monsterHealth = monsterStats[0].health;

    var heroOneDmg = stats[1].oneHandedDmg;
    var monsterOneDmg = monsterStats[0].oneHandedDmg;

    document.getElementById("combatText").style.display = "block";

    document.getElementById("swordButton").disabled = true;
    document.getElementById("monsterButton").disabled = true;
    document.getElementById("hero").disabled = true;


    var heroName = document.getElementById("hero").value;


    heroHealth = heroHealth - monsterOneDmg;

    monsterHealth = monsterHealth - heroOneDmg;

    stats[0].health = heroHealth;
    monsterStats[0].health = monsterHealth;

    if(stats[0].health < 1 && monsterStats[0].health < 1) {
        alert("Both the " + heroName + " and the " + monsterStats[0].name + " have befallen each other!");
        document.getElementById("engage").disabled = true;
    }
    else if(stats[0].health < 1) {
        alert(heroName + " has fallen to the " + monsterStats[0].name);
        document.getElementById("engage").disabled = true;
    }
    else if(monsterStats[0].health < 1){
        alert(heroName +  " has deafeated " + monsterStats[0].name);
        document.getElementById("engage").disabled = true;
    }

    var heroLog = heroName +  " hits " + monsterStats[0].name + " for " + heroOneDmg + " damage";
    var monsterLog = monsterStats[0].name +  " hits " + heroName + " for " + monsterOneDmg + " damage";

    document.getElementById("combatText").innerHTML = heroLog + "<br>" + monsterLog + "<br>" + heroName + " Health : " + heroHealth + "<br>" + monsterStats[0].name + " Health : " + monsterHealth;

}

/* checks to see if specific object item name is in a generic array as well as the string literal, 
for instance if you type Iron Sword it will return true, but if you type in sword it will return false */
function findInArray() {

    var theString = document.getElementById('item').value;

    if(theString == ""){
          alert("The item cannot be null, enter in something please");
          return;
    }

    var sword = {
        "name": "Iron Sword",
        "weapon-class": "Sword",
        "damage": 35,
        "price": "20g"
    };

    var Healthpotion = {
        "name": "Health Potion",
        "price": "20g",
        "health restore": 50
    };

    var bow = {
        "name": "Long Bow",
        "weapon-class": "Bow",
        "damage": 25,
        "price": "30g"
    };

    var items = ["shield", Healthpotion, sword, "bow", bow];

    var output = "";

    var inputFlag = 0;

    for(var i = 0; i < items.length; i++) {

        console.log(items[i]);


            if(items[i].name === theString) {

                alert("The " + theString + " item (the object) is in the inventory");
                
                output = theString + " is in the inventory.";

                document.getElementById("isInInventory").innerHTML = output;

                inputFlag = 1;
            
            }
            

    }

    for(var x = 0 ; x < items.length; x++) {


            if(items[x] === theString) {

                alert("The " + theString + " item (string literal) is in the inventory");
                
                output = theString + " is in the inventory.";

                document.getElementById("isInInventory").innerHTML = output;

                inputFlag = 1;
            
            }
            

    }

    if(inputFlag == 0) {

            output = theString + " is not in the inventory.";

            document.getElementById("isInInventory").innerHTML = output;
        
    }

    return;




}


/* calls the functions below with a timer attatched, therefore executes functions every 5 seconds and then stops */
function withTimer () {

        // repeat interval every second
    var timerId = setInterval(() => dynamicCreate(), 1000);

    // after 5 seconds stop
    setTimeout(() => { clearInterval(timerId); alert('The timer has stopped after 5 seconds'); }, 5500);

}


/* this is super basic example of using javascript to create dynamic content based on a click */
function dynamicCreate() {

            var picture = getRandomIntInclusive(1, 3);

            document.getElementById("dynamicRow").innerHTML += "<div class='col-md-2' style='background-color: #b3c2bf; min-height: 400px; border-radius: 10px;'>" +
            "<img id='bounce' height='160' width='auto' src='img/sliderImg" + picture + ".jpg' style='margin-top: 50px; border-radius: 10px;'>" +
            "<h3> Picture " + picture + " in the header </h3>" +
            "<p>An example of dynamically created content with a randomizer aspect that calls the randomizer function each time before outputting a picture based on an integer</p>" +
            "</div>";


}

function dynamicCreate3() {

            var picture;

            var i = 0;

            for(i ; i < 3; i++) {

                picture = getRandomIntInclusive(1, 3);

                 document.getElementById("dynamicRow").innerHTML += "<div class='col-md-2' style='background-color: #b3c2bf; min-height: 400px; border-radius: 10px;'>" +
            "<img id='bounce' height='160' width='auto' src='img/sliderImg" + picture + ".jpg' style='margin-top: 50px; border-radius: 10px;'>" +
            "<h3> Picture " + picture + " in the header </h3>" +
            "<p>An example of dynamically created content with a randomizer aspect that calls the randomizer function each time before outputting a picture based on an integer</p>" +
            "</div>";

            }

           

}

function dynamicCreate30() {

            var picture;
            var i = 0

            for(i ; i < 30; i++) {

                 picture = getRandomIntInclusive(1, 3);
                
                 document.getElementById("dynamicRow").innerHTML += "<div class='col-md-2' style='background-color: #b3c2bf; min-height: 400px; border-radius: 10px;'>" +
            "<img id='bounce' height='160' width='auto' src='img/sliderImg" + picture + ".jpg' style='margin-top: 50px; border-radius: 10px;'>" +
            "<h3> Picture " + picture + " in the header </h3>" +
            "<p>An example of dynamically created content with a randomizer aspect that calls the randomizer function each time before outputting a picture based on an integer</p>" +
            "</div>";

            }

           

}

document.getElementById("click-me").addEventListener("click", withTimer);

document.getElementById("click-me-3").addEventListener("click", dynamicCreate3);

document.getElementById("click-me-30").addEventListener("click", dynamicCreate30);

document.getElementById("login").addEventListener("click", loginValid);

document.getElementById("in-array-button").addEventListener("click", findInArray);

document.getElementById("calculate-button").addEventListener("click", calculate);

document.getElementById("check-palindrome").addEventListener("click", palindrome);