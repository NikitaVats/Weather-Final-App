const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const url="https://api.darksky.net/forecast/96682741eff1f7f7b9eec40f3b51a16e/34.0544,-118.2439"
request({url:url,json:true},(error,response)=>{
    console.log('It is currently'+response.body.currently.temperature)
  })


forecast(-75.7088,44.1545,(error,data)=>{
    console.log('error'+error)
    console.log('data'+data)
   
    
})
