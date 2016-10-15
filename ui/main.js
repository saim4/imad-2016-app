console.log('Loaded!');

//converting text of index.html
var element= document.getElementById('main-text');
element.innerHTML= 'SAIM"S TESTBENCH.THIS IS FROM ONLINE SERVER';

//moving the madi image from index.html
var img= document.getElementById('madi');
var marginLeft= 0;
function moveRight()
{
    
    marginLeft= +10;
    img.style.marginLeft= marginLeft+ 'px';
}
img.onclick= function(){
    
    var time = setInterval(moveRight,10);
};