const request=require('request')
const forecast=(latitude,longitude,callback)=>{
const url='https://api.darksky.net/forecast/96682741eff1f7f7b9eec40f3b51a16e/'+latitude+','+longitude
request({url:url,json:true},(error,response)=>{
    if(error)
    {
       callback('There is error',undefined)
    }
    else if(response.body.error){
        callback('There is error',undefined)
    }
    else{
        
        callback(undefined,response.body.currently.temperature)
    }
})
}

module.exports=forecast