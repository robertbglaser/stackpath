import React, {useEffect, useState} from 'react'

const CountryCount = (props) => {

    const [sortedCountries, setSortedCountries] = useState([])


    const {returnData} = props
  
   
useEffect(() => {
    var countryOccurances = {}
    returnData.map((data, index) => {
        var country = data.location.country
        countryOccurances[country] = countryOccurances[country]? countryOccurances[country] +1 : +1
    })
  


const sortable = Object.entries(countryOccurances).sort((a,b) =>a[1] - b[1])

 setSortedCountries(sortable)
    
},[]);
 


     
  return (
     <div>
         <h1>Countries in occurance order</h1>
         <ul>{sortedCountries.map((data, index) => <li key={index}> {data} </li>)}</ul> 
         
        
    </div>
  )}

export default CountryCount