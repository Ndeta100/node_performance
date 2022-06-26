const express=require('express')
const cluster=require('cluster')
const app=express()
const port=3000
app.get('/', (req, res)=>{
    res.send(`Performance example: ${process.pid}`)
})
function delay(duration){
    const startTime=Date.now()
    while(Date.now-startTime<duration){
        //event loop completely blocked
    }
}

console.log('Running server.js')
app.get('/timer', (req,res)=>{
    //delay the respond
      delay(9000)
    res.send(`ding ding ding ${process.pid}`)
})
if(cluster.isMaster){
    console.log('Master has been started')
    cluster.fork()
    cluster.fork()
}else{
    console.log('Worker process started')
    app.listen(port,()=>{
        console.log('app listening on port ' + port)
    })
}
