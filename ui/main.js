console.log('Loaded!');

//converting text of index.html
var element= document.getElementById('main-text');
element.innerHTML= 'SAIM PROFILE';

//moving the madi image from index.html
var img= document.getElementById('madi');
var marginLeft= 0;
function moveRight()
{
    
    marginLeft= marginLeft+1;
    img.style.marginLeft= marginLeft+ 'px';
}
img.onclick= function(){
    
    var interval = setInterval(moveRight,10);
};


var button= document.getElementById('counter');

button.onclick = function(){
    
//Creating request to counter page

var request= new XMLHttpRequest();

//handling request

request.onreadystatechange= function(){
    
    if(request.readyState === XMLHttpRequest.DONE ){
    if(request.status===200){
        var counter= request.responseText;
        var span= document.getElementById('count');
        span.innerHTML = counter.toString();
    }    
        
    }
};

request.open('GET','http://saim4.imad.hasura-app.io/counter',true);
request.send(null);
} ;


//Name Request

//var nameInput= document.getElementById('name');
//var name= nameInput.value;
//var submit= document.getElementById('submit_btn');













