var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
 'article-one' : {
  title: 'ABOUT US|SAIM YUSUF',
  heading: 'ABOUT US',
  date: '22/11/2016',
  content:`
  
   <p>
              WELCOME TO REAL ESTATE ACADEMY
              </p>
              <br/>
              <p>
              This website is designed to porvide information about general as well as "technical" terminology used and types ofASDF
              processes and works followed in real estate sector.
              The need for such work arises from the fact that there is almost a scarcity on internet about this topic.There is not 
              a single portal or website dealing with this topic.
              </p>
              
              <p>
              Through Real Estate Academy we are trying to fill this gap and let people understand the ways in which the whole
              business works.
              </p>
              `
    
},

'article-two': {
    
  title: 'LAND TYPES|SAIM YUSUF',
  heading: 'LAND CLASSIFICATION ',
  date: '24/11/2016',
  content:`
  
   <p>
        TYPES OF LAND----------------------------------------------------------------------------------------------------</p>
        <p>
         1) AGRICULTURAL LAND-
        Agriculture land are those which are cultivable.Such lands are of immense importance and specially protected by 
        strict government laws.
        Construction on such land is generally prohbitted and requires government permission.
        </p>
        <p>
        2) RESIDENTIAL LAND-
        Residential Land is located inside towns and unlike agriculture lands, they do not require governments permission 
        for construction.They can be sold and bought with relatively more ease than agricultureal lands.
        </p>
        `
    
},
'article-three': {
    
title: 'LAND DOCUMENTS|SAIM YUSUF',
  heading: 'IMPORTANT PAPERS ASSOCIATED WITH LANDS',
  date: '23/11/2016',
  content:`
  
   <p>
            1) KHASRA-
            Khasra is a like a status bearing document for agricultural lands.It holds the record of types of crops
            cultivated on a land and its status,like constructed or not.
            Khasra is renewed every year so that it keeps track record of latest changes in land.<br/>
            </p>
            <p>
            2) KHATAUNI-
            Khatauni is  made on basis of khasra and unlike khasra is a permanent record.
            However it is renewed every six year
            </p>`
    
}    
    
};

function createtemplate(obj){
    
var title= obj.title;
var date=  obj.date;
var heading= obj.heading;
var content= obj.content;

var htmltemplate=`
      
      <!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <script type="text/javascript" src="/ui/main.js"></script>
		
        <style>
/* unvisited link */
a:link {
    color: #404040;
	text-decoration:none;
	font-weight:200;
}

/* visited link */
a:visited {
    color: #404040;
text-decoration:none;

}

/* mouse over link */
a:hover {
    color:#404040;
	text-decoration:none;
	font-weight:200;
}

/* selected link */
a:active {
    color: #404040;
	text-decoration:none;
	font-weight:200;
}
</style>
		
    </head>
    
    <body  >
     
     <div  title= "REAL ESTATE ACADEMY" >
       <img  id="logo" src="http://smartcity.eletsonline.com/wp-content/uploads/2016/07/real-estate.jpg">
      </div>
      
      <svg id="patti"  width="3000" height="110">
  <rect width="1360" height="100" style="fill:lime;">
    
       </svg>

 <svg id="menupatti"  width="3000" height="35" >
  <rect width="1360" height="100" style="fill:lime;">
    
       </svg>
	   
    <div id="title"> 
           <h1 >THE   REAL   ESTATE   ACADEMY </h1> 
    </div>
    
  <div id="menu" 
 align="middle">
     <a href= "/article-one">ABOUT US</a>  |
  
      <a href= "/article-two">LAND TYPES</a>  |
        
     <a href= "/article-three">LAND DOCUMENTS</a>  |
   
    
    <a href= "https://en.wikipedia.org/wiki/Real_estate" target="blank" link="#ffffff">A GUIDE TO WIKI</a>
	
	
	
       
	   <svg id="line"  width="10" height="600" >
  <rect width="1360" height="500" style="fill:#404040;">
    
       </svg>
	   
	   
	 
    <!--              
 <div class= "footer" align="middle" >This button <button id= "counter">Click me!

            </button> is clicked <span id="count"> 0</span> times  
            </div> 
            -->
     <!-- THIS IS CONTENTS AREA============================================================================= --> 
	                       
 <div id="pc">
<h1> MY PROFILE</h1>
<img  id="logo" src="http://smartcity.eletsonline.com/wp-content/uploads/2016/07/real-estate.jpg">
     <p>Hi, my name is Saim Yusuf and currently I am pursuing B.Tech in Electronics from AKTU.
	 <p>Though an Electronics engineer, I have interest in programming also and love to program anything from microprocessors or
	 controller to JAVA or web development.</P>
	 <p>This is my first website and I built it with the help of NPTEL and HASURA.Thanks a lot to them.</p>
	  
 </div>
      
	  <div id="cont">
	  <h1>WELCOME TO REAL ESTATE ACEDEMY</h1>
	   
	          <img id="p1" src="http://www.dlfcrest.org.in/wp-content/uploads/2015/01/featured.png">
			 
			 ${content}
			 
			  
	</div>  
	  
 <div id="end">
              <h3>THIS WEBSITE HAS BEEN DEVELOPED AS PART OF IMAD COURSE</h3>
</div>

 
 
 
 
        
    </body>
</html> `

           

       
    
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



app.get('/ui/chk_captcha.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'chk_captcha.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
