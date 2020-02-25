
//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address,distanceFromTown,hasNeighbours)
{
    let p2;
    let add=typeof address;
    let distance=typeof distanceFromTown;
    let neighbours=typeof hasNeighbours;
    p2=add+distance+neighbours;
    return p2;
}


//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents,NoOfSiblings,isNuclearFamily)
{
    if(typeof(parents)=="String" && typeof(NoOfSiblings) =="Number" && typeof(isNuclearFamily)=="Boolean")
        return true;
    else
        return false;
}    
//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(text,age){
    if(isNaN(text))
    return  text;
    else
    return age;
    
}
//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit)
{
return ((fahrenheit-32)/1.8);
}
//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(ch)
{
    if(ch == 1)
        return "Take her daughter to a doctor";
    else if(ch == 2)
        return "Talk to her husband about it";
    else if(ch == 3)
        return "Counsel her daughter hersel";
    else if(ch== 4)
        return "Lock her daughter in her room";
    else
        return "no details available"
}
//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren(strategies)
{
    let strategy = [
                            "Try talking to her.",
                            "Make her favourite sweets.",
                            "Let her watch TV all night.",
                            "Don't tell her to study.",
                            "Read her a bedtime story.",
                            "Let her bunk school anytime."
                        ];
    let totalstrategy=strategy.join(" ");
    return totalstrategy.length();
}