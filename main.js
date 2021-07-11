complete(document.getElementById('Fname'));
complete(document.getElementById('Lname'));
complete(document.getElementById('usern'));
complete(document.getElementById('pass'));
complete(document.getElementById('email'));

function complete(input) {
  let parent = input.parentElement;
  input.onkeyup = function() {
    let length = /(?=.{8,})/;
    let Upper = /[A-Z]/;
    let number = /\d+/;
    let special = /(?=.*[!@#$%^&*])/;
    let mix = new RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.{8,})');

    if (input.value != null && /(?=.{3})/.test(input.value)) {
      parent.classList.add('complete');
      input.style.borderColor = '#00BB80'
    } else {
      parent.classList.remove('complete');
      input.style.borderColor = '#9C003F';
    }

    if (input.id == 'usern') {
      if (mix.test(input.value)) {
        parent.classList.add('complete');
        input.style.borderColor = '#00BB80';
        toggle(parent, 'none')
      } else {
        toggle(parent, 'block')
        parent.classList.remove('complete');
        input.style.borderColor = '#9C003F';

        if (number.test(input.value)) {
          parent.children[2].style.color = 'green';
        } else { 
          parent.children[2].style.color = '#9C003F';
          }

        if (Upper.test(input.value)) {
          parent.children[3].style.color = 'green'
        } else {
          parent.children[3].style.color = '#9C003F'
          }

        if (length.test(input.value)) {
          parent.children[4].style.color = 'green';
        } else { 
          parent.children[4].style.color = '#9C003F'
        }
      }
    }

    if (input.id == 'pass') {
      if (special.test(input.value) && Upper.test(input.value) && length.test(input.value)) {
        parent.classList.add('complete');
        input.style.borderColor = '#00BB80'
        toggle(parent, 'none')
      } else {
        parent.classList.remove('complete');
        input.style.borderColor = '#9C003F';
        toggle(parent, 'block');
        
        if (Upper.test(input.value)) {
          parent.children[2].style.color = 'green'
        } else {
          parent.children[2].style.color = '#9C003F'
        }
        
        if (special.test(input.value)) {
          parent.children[3].style.color = 'green'
        } else {
          parent.children[3].style.color = '#9C003F'
        }
        
        if (length.test(input.value)) {
          parent.children[4].style.color = 'green'
        } else {
          parent.children[4].style.color = '#9C003F'
        }
      }
    }
    
    if (input.id == 'email') {
      if (/(?=.*[@])/.test(input.value) && /(?=.*[.])/.test(input.value)) {
        parent.classList.add('complete');
        input.style.borderColor = '#00BB80';
      }else {
        parent.classList.remove('complete');
        input.style.borderColor = '#9C003F';
      }
    }
  }
}
function toggle(parent, style){
  for (var i = 2; i < 5; i++) {
    parent.children[i].style.display = style;
  }
}

document.getElementById('send').onclick = function(e) {
  e.preventDefault();
}

