import axios from 'axios';

const API = 'https://api.covid19api.com';


export const fetchCountries = async() =>{
    const {data} = await axios.get(`${API}/countries`);

    return data;
}

export const fetchDataByCountry = async(country) =>{
    const {data} = await axios.get(`${API}/country/${country}/status/confirmed`);

    return data;
}