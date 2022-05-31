import React, {useState, useEffect}  from 'react'
import Select from 'react-select';
import CountryCount from './CountryCount';


const options = [
  { value: 'select', label: 'Please select a gender' },
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
];
function Countrylist() {
    const [returnData, setReturnData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

  const url = 'https://randomuser.me/api/?results=100';

  async function fetchMyAPI() {
    let response = await fetch(url)
    response = await response.json()
    setReturnData(response.results)
  
  }
  useEffect(() => {
      fetchMyAPI()

      
  },[]);
   
 //  console.log('@@@@',returnData)
 
 const filterByGender = (selectedOption)=>{
        setSelectedOption(selectedOption)

 }
  return (
    <div>Countrylist is alive
      <br/>
      <label>To filter by gender, please select one  </label><br/>
      <Select
        defaultValue={selectedOption}
        onChange={filterByGender}
        options={options}
        className='gender'
      />

      {returnData.filter((val) => {
          if (selectedOption !== null && val.gender.toLowerCase() === selectedOption.value){
               return (
                 <p>{val.name.first} </p>
               )
          }
      }).map((val, key) => {
       return (
         <div key={key}>
           <p>{val.name.first} {val.name.last}</p>
           </div>
       )
      })}
     
     <ul>{returnData.map((data, index) => <li key={index}> {data.email} </li>)}</ul> 
       <CountryCount returnData={returnData}/>

    </div>
  )
}

export default Countrylist