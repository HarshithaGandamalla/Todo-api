var express=require('express');
var app=express();
var PORT=process.env.PORT||3000;

var todos=[{
	   id:1,
	   description: "meet mom for lunch",
	   completed: false

},{
       id:2,
	   description: "Go to market",
	   completed: false
},{
       id:3,
	   description: "Go to market again",
	   completed: true
}];

app.get('/',function (req,res){
   res.send("Todo api root")

});

app.get('/todos',function(req,res){
	res.json(todos);

});

app.get('/todos/:id',function (req,res){
 
  //res.send('Asking for id '+req.params.id);

  var todoId=parseInt(req.params.id,10);
  //console.log(todoId);
  var matchedTodo;

 todos.forEach(function(todoitem){

 	if(todoitem.id === todoId)          
        matchedTodo=todoitem;

 });

  if(matchedTodo)
  {
  	res.send(matchedTodo);
//  res.json(matchedTodo);

}
  else
  res.status(404).send();

});



app.listen(PORT,function(req,res){
 console.log('Express listening on port '+PORT+'!');

});