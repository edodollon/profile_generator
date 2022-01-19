const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)? ', (answer) => {
  str1 = answer;

  rl.question('What\'s an activity you like doing? :) ', (answer2) => {
    str2 = answer2;

    rl.question('What do you listen to while doing that? :) ', (answer3) => {
      str3 = answer3;

        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) :) ', (answer4) => {
          str4 = answer4;

            rl.question('What\'s your favourite thing to eat for that meal? :) ', (answer5) => {
              str5 = answer5;

                rl.question('Which sport is your absolute favourite? :) ', (answer6) => {
                  str6 = answer6;

                    rl.question('What is your superpower? In a few words, tell us what you are amazing at! :) ', (answer7) => {
                      str7 = answer7;
                        console.log(`Hello ${str1}! ${str2} is pretty cool and listening to ${str3} while doing so is an excellent choice. Eating ${str4} is also my favorite and ${str5} is also one of my favourites! ${str6} is a great sport to play imagine if you had ${str7} while playing!`);
                        rl.close();
                      })
                  })
              })
          })
  })
  
  })
});
