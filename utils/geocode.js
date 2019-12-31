
const request=require('request')
const geocode=(location,callback)=>{
    const url1="https://api.mapbox.com/geocoding/v5/mapbox.places/" +encodeURIComponent(location)+".json?access_token=pk.eyJ1IjoibmlraXRhdmF0czAzIiwiYSI6ImNrNGNkNzVmcjA0bHMzbG1ybHhzcHZjYTAifQ.b_eSWLbYzjDqTRH8OjIvbg"
    request({url:url1,json:true},(error,response)=>{
        if(error)
        {
            callback('There is error',undefined)
        }
        else if(response.body.features.length===0){
            callback('There is error',undefined)
        }
        else{
            callback(undefined,{
                longitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1]
            })
        }
       
    })
    }
    module.exports=geocode