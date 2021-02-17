import React, { useEffect, useState } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import { fetchDataByCountry } from '../../api';
export const Chart = (props) =>{
    const [countryData, setData] = useState();

    useEffect(()=>{
        const fetchCountryData = async()=>{
            setData(await fetchDataByCountry(props.currentCountry))
        }
        fetchCountryData();
    },[props.currentCountry])
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

    return(
        <div>
            {countryData ? (<Line
            data={{
                labels: countryData.map((data)=> data.Date.toString().slice(0,10)),
                datasets: [
                    {
                        label: 'Cases',
                        borderWidth: 5,
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        data: countryData.map((data)=> data.Cases),
                        cubicInterpolationMode: "monotone"
                    }
                ]
            }}
           />) : 'Loading...'}
           
        </div>
    )
}