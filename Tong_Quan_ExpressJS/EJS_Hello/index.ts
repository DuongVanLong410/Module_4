import express from "express";
import bodyParser from "body-parser";

const app = express();
app.set('views','./src/view');
app.set('view engine','ejs')
app.use(express.static('./public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.listen(3000,() =>{
    console.log('Server is running on port 3000')
})

app.get('/',(req, res) =>{
res.render('index')
})

app.get('/students/:id',(req, res) => {
    res.send('This is student ' + req.params.id)
})

app.post('/',(req, res) => {
    console.log(req.body)
})