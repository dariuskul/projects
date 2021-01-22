import axios from 'axios';


const fetchCountries = async (url) =>{
    const response = await axios.get(url);

    return response.data;
}

export default fetchCountries;
