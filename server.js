const express = require ('express');
const app = express();

const mockUserData=[
    {name: 'mark'},
    {name : 'jill'}
];
app.get('/users/:id', function(req, res){
    console.log(req.params.id);
    res.json({
        success : true,
        message : 'sucefully got user!',
        user : req.params.id
    })
});

app.listen(8000,function(){
    console.log('server running')
});
