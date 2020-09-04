console.log('kk')
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
      }
    
      function playSound(e) {
        keyCode = e.keyCode
        switch (keyCode) {
          case 65: $('#sound').attr('src','sounds/clap.wav')
                  audio = $('#sound')[0]
                  break;
          case 83: $('#sound').attr('src','sounds/hihat.wav')
                  audio = $('#sound')[0]
                  break;
          case 68: $('#sound').attr('src','sounds/kick.wav')
                  audio = $('#sound')[0]
                  break;
          case 70: $('#sound').attr('src','sounds/openhat.wav')
                  audio = $('#sound')[0]
                  break;
          case 71: $('#sound').attr('src','sounds/boom.wav')
                  audio = $('#sound')[0]  
                  break;
          case 72: $('#sound').attr('src','sounds/ride.wav')
                  audio = $('#sound')[0]  
                  break;
          case 74: $('#sound').attr('src','sounds/snare.wav')
                  audio = $('#sound')[0]  
                  break;
          case 75: $('#sound').attr('src','sounds/tom.wav')
                  audio = $('#sound')[0]  
                  break;
          case 76: $('#sound').attr('src','sounds/tink.wav')
                  audio = $('#sound')[0]  
                  break;
        
          default: audio = null
                  break;
        }
        const key = $(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;
    
        key.addClass('playing');
        audio.currentTime = 0;
        audio.play();
      }
    
      keys = Array.from($('.key'));
      console.log(keys)
      keys.forEach(key => key.addEventListener('transitionend', removeTransition));
      window.addEventListener('keydown', playSound);