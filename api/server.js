const express = require('express')
const app = express()
const PORT = 8000

let ulmer = {
  'quote': 'Life is uncertain. Eat dessert first.',
  'fullName': 'Ernestine Ulmer'
}

app.get('/', (requst, response) =>  {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/ulmer', (request, response)=> {
  response.json(ulmer)
})

app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`)
})


// foodQuotes: [
//   '\"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.\"  \n -- J.R.R. Tolkien',
//   '\"All happiness depends on a leisurely breakfast.\"  \n -- John Gunther', 
//   '\"You don\'t need a silver fork to eat good food.\" \n --  Paul Prudhomme',  
//   '\"A balanced diet is a cookie in each hand.\" \n -- Barbara Johnson', 
//   '\"People who love to eat are always the best people.\" \n -- Julia Child', 
//   '\"To eat is a necessity, but to eat intelligently is an art.\" \n -- François de la Rochefoucauld',  
//   '\"We all eat, and it would be a sad waste of opportunity to eat badly.\" \n -- Anna Thomas', 
//   '\"Never eat more than you can lift. ” \n -- Miss Piggy', 
//   '\"My doctor told me to stop having intimate dinners for four. Unless there are three other people.” \n -- Orson Welles',  
//   '\"An onion can make people cry but there\'s never been a vegetable that can make people laugh.” \n -- Will Rogers', 
//   '\"Cauliflower is nothing but cabbage with a college education.\” \n -- Mark Twain', 
//   '\"Red meat is not bad for you. Now, blue-green meat, that\'s bad for you!” \n -- Tom Smothers', 
//   '\"Remember, don\'t shoot food\" \n -- Gauntlet01, 1985 Atari Games', 
//   '\"Warrior needs food badly.” \n -- Gauntlet02, 1985 Atari Games', 
//   '\"Valkyrie needs food badly.” \n -- Gauntlet03, 1985 Atari Games', 
//   '\"Wizard needs food badly.” \n -- Gauntlet04, 1985 Atari Games', 
//   '\"Elf  needs food badly.” \n -- Gauntlet05, 1985 Atari Games',
//   '\"It\'s dangerous to go alone! Take this.\" \n --  The Legend of Zelda,  1986 Nintendo', 
//   '\"Snack time heals all wounds.” \n -- Bridger Winegar',    
//   '\"Food is our common ground, a universal experience.” \n --  James Beard',  
//   '\"The only thing I like better than talking about food is eating.” \n -- John Walters',    
//   '\"If we shake out all of the crumbs from all of the keyboards in the world, we can end world hunger.” \n -- Matthew Dolkart',   
//   '\"Food is symbolic of love when words are inadequate.” \n -- Alan D. Wolfelt',    
//   '\"One cannot think well, love well, sleep well, if not has not dined well.\" \n -- Virginia Woolf',
//   '\"Ask not what you can do for your country. Ask what’s for lunch.” \n -- Orson Welles' ,
//   '\"Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.”\n -- Ruth Reichl',
//   '\"Humor keeps us alive. Humor and food. Don\'t forget food. You can go a week without laughing.” \n -- Joss Whedon', 
//   '\"Knowledge is the food of the soul.” \n -- Plato', 
//   '\"Let food be thy your medicine.” \n -- hippocrates', 
//   '\"Your diet is a bank account. Good food choices are good investments.” \n -- Bethenny Frankel', 
//   '\"Life is uncertain. Eat dessert first.” \n --Ernestine Ulmer', 
//   '\"Food is our common ground, a universal experience.” \n -- James Beard',
//   '\"He who wants to eat honey should endure the stings”. \n -- Lebanese Proverb',
//   '\"Happiness rarely keeps company with an empty stomach.” \n -- Japanese Proverbs', 
//   '\"Never eat in a restaurant where the chef is thin.” \n -- Chinese Proverb'
// ]