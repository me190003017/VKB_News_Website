// Bhupendra Singh
// IIT Indore


const express=require('express')
const app =express()
const path=require('path')
const port = 300;

// EXPRESS RELATED STUFF
app.use('/static',express.static('static')); // For serving static files
app.use(express.urlencoded());

// PUG RELATED STUFF
app.set('view engine', 'pug') // set template engine as pug
app.set('views',path.join(__dirname,'views'));// set the view directory


// ENDPOINTS
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params);
})
app.get('/business',(req,res)=>{
    // res.send("this is business")
    res.status(200).render('business.pug');
})
app.get('/sports',(req,res)=>{
      // res.send("this is sports")
    res.status(200).render('sports.pug');
})
app.get('/technology',(req,res)=>{
      // res.send("this is tech")
    res.status(200).render('tech.pug');
})
app.get('/health',(req,res)=>{
      // res.send("this is health")
    res.status(200).render('health.pug');
})
app.get('/science',(req,res)=>{
      // res.send("this is science")
    res.status(200).render('science.pug');
})
app.get('/entertainment',(req,res)=>{
  // res.send("this is entertainment")  
  res.status(200).render('entertainment.pug');
})


app.listen(port,()=>{
    console.log(`server is running on port http://127.0.0.1:${port}`)
})
