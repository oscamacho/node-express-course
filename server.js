const express = require ('express');
const app = express();

const mockUserData=[
    {name: 'mark'},
    {name : 'jill'}
];
app.get('/users', funcrio(req, res){
    res.json({
        success : true,
        message : 'sucefully got user!',
        user : mockUserData
    })
});

app.listen(8000,function(){
    console.log('server running')
});
