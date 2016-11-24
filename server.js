var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
 'article-one' : {
  title: 'ARTICLE ONE| SAIM YUSUF',
  heading: 'ARTICLE ONE',
  date: '4.12.1995',
  content:`
  
   <p>
                THE ARTICLE FIRST starts from here.This article act as launchpad for your JAVA course.
                
                
                
            </p>
            
            <p>
                this is second paragraph
            </p>
            <p>
                this is third paragraph
            </p>`
    
},

'article-two': {
    
  title: 'ARTICLE TWO| SAIM YUSUF',
  heading: 'ARTICLE TWO',
  date: '10.12.15',
  content:`
  
   <p>
                THE ARTICLE SECONDS starts from here.This article act as launchpad for your JAVA course.
                Make sure that you follow regularly.
                
                
            </p>
            
            <p>
                this is second paragraph
            </p>
            <p>
                this is third paragraph
            </p>`
    
},
'article-three': {
    
title: 'ARTICLE THREE| SAIM YUSUF',
  heading: 'ARTICLE THREE',
  date: '4.12.1995',
  content:`
  
   <p>
                THE ARTICLE THREE starts from here.This article act as launchpad for your JAVA course.
                Make sure that you follow regularly.
                
                
            </p>
            
            <p>
                this is second paragraph
            </p>
            <p>
                this is third paragraph
            </p>`
    
}    
    
};

function createtemplate(obj){
    
var title= obj.title;
var date=  obj.date;
var heading= obj.heading;
var content= obj.content;

var htmltemplate=`
    
 <HTML>
 <head>
        <title>
               ${title}
            
             </title>
        
      <link href="/ui/style.css" rel="stylesheet" /> 
      
    </head>
    
   
    
    <body>
      <div class= 'container'>
        <div>
            <a href= "/">HOME</a>
        </div>
        
         <div>
            <a href= "/article-two">SECOND ARTICLE</a>
        </div>
        
         <div>
            <a href= "/article-three">THIRD ARTICLE</a>
        </div>
        <hr/>
        
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
     </div>
    </body>
                  
</HTML> `   
       
    
return htmltemplate;    
}






app.get('/', function (req, res) {
   
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter= 0;

app.get('/counter',function(req,res){
    
counter= counter+1;
res.send(counter.toString());
});

app.get('/:articlename', function (req, res) {
     //articlename== article-one
     //articles[articlename]== {} content object for article one
     var articlename= req.params.articlename;
res.send(createtemplate(articles[articlename]));
});

app.get('/second', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'second.html'));
});

app.get('/third', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'third.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/Rotatory solar panel-Copy.pptm',function(req,res){
    res.sendFile(path.join(_dirname, 'ui', 'Rotatory solar panel-Copy.pptm'))
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
