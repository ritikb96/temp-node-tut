const { error } = require('console')
const{readFile,writeFile} = require('fs')
readFile('./content/first.txt','utf-8',(err,result)=>
{
    if(err)
    {
        console.log(err)
        return
    }
    console.log(result)
})
