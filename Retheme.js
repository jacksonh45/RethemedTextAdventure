const begin = `Welcome to the LOTR text adventure game. You are Frodo Baggins on his adventure to save Middle Earth!   1/?`

const enter = "Please enter either 1 or 2"

const w = `Congratulations you've made it to Rivendell!` 

const ww = `Congratulations you've completed part 1!`
//^^^^^BEGINNING AND ENDING ALERTS^^^^^^


//Answering 2 will end the game
const q1 = `You're approached by a gray wizard (Gandalf)  who offers you a ring. Should you…
1. Accept to bear the ring
OR
2. Deny the ring
${enter}`

const gameOver1 = `Without you carrying the ring MIddle Earth falls. Game Over`


//Answering 2 will end the game
const q2 = `You're instructed to head towards the town of Bree. Should you…
1. Head towards Bree
OR
2. Head East instead
${enter}`

const gameOver2 = `While going East you get spotted by a Nazgul. Game Over`


//Answering 1 will end the game
const q3 = `While walking to Bree you come across a Nazgul. Should you…
1. Put on your ring and become invisible 
OR
2. Don't put on the ring
${enter}`


const gameOver3 = `As you put the ring on the Nazgul senses you. Game Over`


// IF THEY PICK TO LEAVE BY THEMSELVES THE GAME WILL END WITH ANY OTHER OPTION THEY PICK
//Confronting him is the only way to keep the game going
const q4 = `The Nazgul goes elsewhere and you finally make it to Bree and come across a mysterious guy. Should you…
1. Leave
OR
2. Confront him
${enter}`

// If they answer 1 for q4 BOTH OPTIONS WILL LEAD TO AN END
const q41 = `You decide to leave, while mindlessly wondering, you get hungry. Should you…  
1. Keep walking  
OR
2. Make a fire and eat
${enter}`  
//


// If they answer 1 for q41
const gameOver41 = `As you're walking the Nazgul sense the ring and kill you. Game Over`
//


// If they answer 2 for q4
const alert1 = `He announces his name as Aragorn and offers his help with your journey`
//


// If they answer 1 for q42
const q421 = `You accept his offer of help and yall continue the journey. While walking you get hungry. Should you...
1. Make a fire and eat
OR
2. Keep walking
${enter}`


// If they answer 1 for q421
const alert4211 = `You make a fire while Aragorn searches. As you made the fire the Nazgul sense it and head to you. They stab and poison you with their Morgal blade before Aragorn comes to your rescue.`
const alert42111 = `As he tends to your wound, an Elf by the name of Arwen in search for Aragorn comes and brings you back to her home of Rivendell to better tend to you. You spend months resting there before waking up again.`


//If they answer 2 for q421
const alert4212 = `Yall decide to keep walking West and come across Arwen in search of Aragorn. She takes both of yall to her home of Rivendell to rest. `


// This branches off question 4.1 if they answer 2  ALSO THIS WHOLE BRANCH WILL END THE GAME
const q5 = `As you get ready to eat, the Nazguls sense the fire and come. They corner you. Should you…
1.Put the ring on
OR
2.Try to fight them
${enter}`
const gameOver51 = `Putting the ring on only made things worse as they can see you still and kill you. Game Over`
const gameOver52 = `You try to fight them but no man can kill them. They kill you, Game Over`
//


//Answering No ends the game
//Answering Yes will continue
const q6 = `Would you like to continue?
1. Yes
OR
2. No
${enter}`


const q7 = `After a few months of rest you wake up in Rivendell with all your friends there and Gandalf. He apologizes for not being there in Bree as he had important matters to handle (A certain white wizard). You bring the ring to the council of Elrond. All races are there arguing who should be the one to carry the ring and destroy it. Should you...
1.Volunteer to take it
OR
2. Say nothing
${enter}`


//Volunteer
const q8 = `You volunteer to take the ring to Mordor and destroy it. After thinking about it they allow it, Giving you 8 other companies on your journey naming you the Fellowship of the ring. Yall begin the journey shortly after and travel to the Misty Mountains before a White Wizard by the name of Sauronman tries to interfere and kill yall. Should you...
1. Go through the gap at Rohan
OR
2. Enter the Mines of Moria
${enter}`


//Say nothing
const a71 = `You sit back and watch as they argue over the ring. Despite not wanting to take the ring, Gandalf insists you take it because of the lack of greed and power Hobbits have`


const a9 = `Yall head towards the Mines of Moria only to discover the door is locked and requires someone to speak the Elvish word for "Friend"...`


const a10 = `Yall make it to the gap at Rohan only to discover Sauronmans army waiting for you...`

//Starts the entire game
alert(begin)


let userInput = prompt(q1)
 

if(userInput == 1){
    userInput = prompt(q2)
    if(userInput == 1){
        userInput = prompt(q3)
        if(userInput == 2){
            userInput = prompt(q4) // Answering 1 kills them no matter the option
            if(userInput == 1){
                userInput = prompt(q41)
                if(userInput == 2){
                    userInput = prompt(q5)
                    if(userInput == 1){
                        alert(gameOver51)
                    } else{
                        alert(gameOver52)
                    }
                } else{
                    alert(gameOver41)
                }
            } else {
                alert(alert1), userInput = prompt(q421)  
                if(userInput == 1){
                    alert(alert4211),  alert(alert42111), userInput = prompt(q6)
                    if(userInput == 1){
                        userInput = prompt(q7)
                        if(userInput == 1){
                            userInput = prompt(q8) 
                            if(userInput == 1){
                                alert(a10)
                            } else[
                                alert(a9)
                            ]
                        } else {
                            alert(a71), userInput = prompt(q8)
                            if(userInput == 1){
                                alert(a10)
                            } else{
                                alert(a9)
                            }
                        }
                    } else {
                        alert(w)
                    }
                } else {
                    alert(alert4212),  userInput = prompt(q6)
                    if(userInput == 1){
                        userInput = prompt(q7)
                        if(userInput == 1){
                            userInput = prompt(q8)
                            if(userInput == 1){
                                alert(a10)
                            } else{
                                alert(a9)
                            }
                        } else {
                            alert(a71), userInput = prompt(q8)
                            if(userInput == 1){
                                alert(a10)
                            } else{
                                alert(a9)
                            }
                        }
                    } else {
                        alert(w)
                    }
                }
            }
        } else{
            alert(gameOver3)
        }
    } else{
        alert(gameOver2)
    }
} else{
    alert(gameOver1)
}
