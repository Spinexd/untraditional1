//------- Constants---------//

const head3 = document.querySelector('.head3 h3');
const command = document.querySelectorAll('.commands li');
const prompt = document.querySelector('#prompt');
const textline = document.querySelector('.text-line');
const input = document.querySelector('input');


//-----Functions-------//

function navigate(command) {
  window.location.href = command;
}

//-----EventListener------//


const whitelist = ['memes', 'gallery', 'discord', 'forum', 'index']; // add other subsites that you want to go to here

prompt.addEventListener('submit', function(event) {
  event.preventDefault();
  let sanitizedValue = event.target.querySelector('input').value;

  // if you wrote "/memes" instead of "memes", remove the "/"
  if(sanitizedValue.startsWith('/')) {
    sanitizedValue = sanitizedValue.substr(1);
  }

  // check whether you already wrote "memes.html", if so, remove the ".html"
  if(sanitizedValue.indexOf('.html') > 0) {
    const parts = sanitizedValue.split('.'); // divides "memes.html" into ["memes", "html"]
    sanitizedValue = parts[0]; // take only "memes"
  }

  // is this actually a value we like
  if(whitelist.includes(sanitizedValue)) {
    navigate(sanitizedValue + '.html');
    console.log('i should navigate but right now i dont');
  } else {
    alert('Only these values are allowed: ' + whitelist.join(','));
  }
});

/*navigate('memes.html');*/


/* - add an eventlistener to the form
- preventDefault on the event of that listener because the default would reload the page
- check the value of the input
- if its empty, dont do anything
- else compare with your routes (routes are /memes for example)
- if it matches, move the user there via navigate*/



//array.prototype and string.prototype
