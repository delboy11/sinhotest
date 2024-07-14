const express = require('express');
const app = express();

app.listen(8080,function(){
    
})

app.get('/sexy',function(요청 ,응답){
    응답.send('엄준식')
})

app.get('/',function(요청 ,응답){
    응답.sendFile(__dirname + '/index.html')
})
