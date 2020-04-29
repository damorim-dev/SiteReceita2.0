const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const recipes = require('./data');


server.set('view engine','njk');
nunjucks.configure('views',{
express:server,
autoescape:false,
noCache:true
});


server.use(express.static('public'))
server.use(express.static('img'))

server.get("/", function(req,res){
    return res.render('index')
})

server.get("/menu",function(req,res){
    return res.render('menu',{items:recipes})
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;

    const recipe = recipes.find(function(recipe){
        if (recipe.recipeIndex == recipe[1]){
            return true;
        }
    })
  
    //console.log(receipts[recipeIndex]);
    return res.render('recipes',{items:recipes, id:recipeIndex}); 
  })

server.listen(5000,function(){
    console.log("Server is running");
})