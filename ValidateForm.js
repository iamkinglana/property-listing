export function validateForm() {
  var roleRadios = document.getElementsByName('role');
  var name = document.getElementById('name').value;
  var mobile = document.getElementById('mobile').value;

  var roleSelected = false;
  for (var i = 0; i < roleRadios.length; i++) {
    if (roleRadios[i].checked) {
      roleSelected = true;
      break;
    }
  }

  if (name.trim() === '') {
    document.getElementById('nameError').innerHTML = 'Name is required';
    return false;
  } else {
    document.getElementById('nameError').innerHTML = '';
  }

  if (roleSelected && mobile.trim() === '') {
    document.getElementById('mobileError').innerHTML = 'Enter your whatsapp numbers. Market is High, Buyers will definately call you';
    return false;
  } else {
    document.getElementById('mobileError').innerHTML = '';
  }

  return true;
}
