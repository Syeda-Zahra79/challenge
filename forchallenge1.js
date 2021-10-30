function agetodays() {
    var age = prompt('How old r u dude?');
    var result = age * 365;
     var h1 = document.createElement('h1');
    var textTo =  document.createTextNode('You are '+ result + 'days old.');
    h1.setAttribute('id', 'oh');
    h1.appendChild(textTo);
    document.getElementById('hello').appendChild(h1);
    console.log(result);
}
function reset()
{
document.getElementById('oh').remove();
}