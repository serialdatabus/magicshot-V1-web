const express=require("express"); 
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app= express();
//setting the view engine as EJS. 
app.set('view engine', 'ejs');
//roots the views directory to public
app.set('views', 'public');
//tells express that the public folder is the static folder
app.use(express.static("public"));
//home route
app.get("/", function(req,res){
  res.sendFile("index.html");
}); 

app.listen(3000, function(){
        console.log("SERVER STARTED ON localhost:3000");     
})