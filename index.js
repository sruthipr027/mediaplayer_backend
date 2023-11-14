//Import json-server library in index.js file
 const jsonServer = require('json-server')

 // create server using json-server library
  const mediaPlayerServer =jsonServer.create()

  //create a path to db.json
  const router=jsonServer.router('db.json')

//middleware to convert js to json
 const middleware=jsonServer.defaults()

 //connect  using use
 mediaPlayerServer.use(middleware)
 mediaPlayerServer.use(router)

 // by default json will run in port 3000 and our frontend will also 
 // run at port 3000 so there will be a clash so 
 // setup port for server
 // if we are hosting our project in any platform and if any other project is consuming our port
 // there will be again clash so we give  process.env.PORT
 const port=5000 || process.env.PORT

 //listen to monitor 4000
 mediaPlayerServer.listen(port,()=>{
    console.log(`mediaplayerserver is listening to ${port} and waiting for the response`);
 })