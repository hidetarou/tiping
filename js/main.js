'use strict' ;
{
  const words = [
    'red',
    'blue',
    'pink',
    'orange',
    'yellow',
    'black',
    'white',
    'glay',
    'green',
    'brown',
    'purple',
    'rose',
    'skyblue',
    'navy',
    'gold',
    'silver',
    
  ]
  let word;
  let loc = 0;
  let wog = 0;
  let startTime;
  let isPlaying = false;

 function setWord() {
  
  word = words[Math.floor(Math.random() * words.length)];
  target.textContent = word;
 }

 const target = document.getElementById('target');

  document.addEventListener('click', () =>{
    if(isPlaying === true) {
      return;
    }
    
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });
 

  document.addEventListener('keydown', e =>{
    if (e.key !== word[loc]){
      wog++;
      return;
    }
    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if(loc === word.length) {
      if(words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds ${wog}mistipes`;
        isPlaying = false;
        const replay = document.getElementById('replay');
        replay.textContent = 'replay';
        
      }

      loc = 0;
      setWord();
    }

  });

  }
  