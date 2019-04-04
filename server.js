const express   = require("express");
const app       = express();
const store     = require('json-fs-store')('./data');
const bodyParser= require('body-parser');
const logger    = require('morgan');
const conf      = require('./config/config');
const jwt       = require('jsonwebtoken');
const fs        = require('fs');
const path      = require('path');
const formidable= require('formidable'),
           http = require('http'),
           util = require('util');
const crypto    = require('crypto'),
    algorithm   = 'aes-256-cbc',
    password    = 'dimasadyaksa';


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());       
app.use(logger('dev'));
app.set('Secret', conf.secret);


app.listen(80, () => {
    console.log("Server port : 80");
});


app.get("/user",(req,res,next)=>{
    store.list(function(err,obj){
        if(err){
            console.log(err);
        }
        res.status(200).json(obj);
    });
})


app.post("/user",(req,res,next)=>{
    data = {
        "id":encrypt(req.body.username),
        "username":req.body.username,
        "password":encrypt(req.body.password)
    };
    store.add(data,(err)=>{
        if(err){
            console.log("Error "+err);
        }
        store.list((err,obj)=>{
            if(!err){
                res.status(200).json({"status":"Berhasil","id":data.id});
            }
        })
    });
})

app.post('/login',(req,res)=>{
    store.load(encrypt(req.body.username),(err, object)=>{
        if(err){
            res.json("User Tidak Ditemukan");
        }else{
            if(req.body.password===decrypt(object.password)){
                const payload = {
                    check:  true
                };
                var token = jwt.sign(payload, app.get('Secret'), {
                    expiresIn: 1440 
                });
    
                res.json({
                    message: 'LOGIN BERHASIL',
                    "id":decrypt(object.id),
                    "username":object.username,
                    "password":decrypt(object.password),
                    token: token
                });
    
                }else{
                    res.json({message:"Password Salah!"})
                }
        } 
        
      });
})

app.post('/upload', (req, res) => {
    let form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = path.join(__dirname,'/uploads');
    form.keepExtensions = true;
    form.maxFieldsSize = 20 * 1024 * 1024;
    form.maxFileSize = 200 * 1024 * 1024;
    form.hash = false;
    form.multiples = false;
    form.type = "urlencoded";

    form.parse(req, (err, fields, files) => {
      if (!err) {
        res.json({"status":"OK"});
      }else{
          res.json({"status":"GAGAL"});
          console.log(err);
      }
      
    });
})

app.get('/files',(req,res)=>{ 
    
        fs.readdir(path.join(__dirname,'/uploads'),(err, items) =>{
            var tmp=[];
            var j={}
            for (let i=0; i<items.length; i++) {
                
                tmp.push({"file":items[i]});
                j=tmp;
            }
            if(err){
                console.log(err);
            }
            res.json(j);
        });
})

  
function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}