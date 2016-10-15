console.log('Loaded!');

//converting text of index.html
var element= document.getElementById('main-text');
element.innerHTML= 'SAIM"S TESTBENCH.THIS IS FROM ONLINE SERVER';
//moving the madi image from index.html
var img= document.getElementById('madi');
img.onclick= function(){
    
    img.style.marginLeft= '100px';
};