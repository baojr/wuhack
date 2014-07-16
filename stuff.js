$(document).ready(function() {
  var mainDiv = $('#main');
  var defaultButton = $('#show-default');
  var aboutButton = $('#show-about');
  var sponsorsButton = $('#show-sponsors');

  var defaultDiv = $('#default-content');
  var aboutDiv = $('#about-content');
  var sponsorsDiv = $('#sponsors-content');


  var terminalText = '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  var timer;

  function show(div) {
    stopTyping();
    mainDiv.html(div.html());
  }

  function startTyping() {
    terminal = $('#main .terminal');
    var i = 0;

    (function addCharacter() {
      var delay = Math.random() * 5 + 15;
      if (terminalText.charAt(i) == ' ') {
        delay += 30;
      }
      timer = setTimeout(function() {
        terminal.text(terminalText.substring(0, ++i) + '_');
        if (i == terminalText.length) {
          terminal.text(terminalText);
          clearTimeout(timer);
        } else { 
          addCharacter();
        }
      }, delay);
    }());
    
  }

  function stopTyping() {
    clearTimeout(timer);
    terminal = $('#main .terminal');
    terminal.text('');
  }

  defaultButton.click(function() { show(defaultDiv); startTyping(); });
  aboutButton.click(function() { show(aboutDiv); });
  sponsorsButton.click(function() { show(sponsorsDiv); });
  
  show(defaultDiv);
  startTyping();
});