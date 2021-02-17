import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../api';
import NativeSelect from '@material-ui/core/NativeSelect';

export const CountryPicker = (props) =>{

    const [countries,setCountries] = useState();

    useEffect(()=>{
        const fetchData = async() =>{
            setCountries(await fetchCountries());
        };
        fetchData();
    },[])

    const onChangeHandler = event => {
       props.selectCountry(event.target.value)
      };

    return(
        <div>
        {countries? (<NativeSelect
          value={props.currentCountry}
          onChange={onChangeHandler}
        >
          {countries.map((country) =>{
             return <option value={country.Slug}>{country.Country}</option>
          })}
        </NativeSelect>) : 'Loading data...'}
        </div>
    )
}