$(document).ready(function() {
  var mainDiv = $('#main');
  var defaultButton = $('#show-default');
  var aboutButton = $('#show-about');
  var sponsorsButton = $('#show-sponsors');
  var faqButton = $('#show-faq');
  var applyButton = $('#show-apply');


  var defaultDiv = $('#default-content');
  var aboutDiv = $('#about-content');
  var sponsorsDiv = $('#sponsors-content');
  var faqDiv = $('#faq-content');
  var applyDiv = $('#apply-content');


  var terminalText = '&gt;Washington University in St. Louis\'s Upsilon Pi Epsilon is hosting a hackathon open to all college students this fall<br>' +
                     '&gt;The hackathon will run from September 12th — 14th and will have top companies such as Google and Microsoft as sponsors<br>' +
                     '&gt;Submit an application to register!';
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
      } else if (terminalText.charAt(i) == '\n') {
      
      }
      timer = setTimeout(function() {
        terminal.html(terminalText.substring(0, ++i) + '_');
        if (i == terminalText.length) {
          terminal.html(terminalText);
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
  faqButton.click(function() { show(faqDiv); });
  applyButton.click(function() { show(applyDiv); });
  
  show(defaultDiv);
  startTyping();
});