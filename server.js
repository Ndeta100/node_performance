const express=require('express')
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
      delay(4000)
    res.send(`beep beep beep ${process.pid}`)
})

    console.log('Worker process started')
    app.listen(port,()=>{
        console.log('app listening on port ' + port)
    })

