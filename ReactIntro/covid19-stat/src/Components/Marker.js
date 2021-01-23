import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
class MarkerAnalysis extends React.Component{
    constructor(props){
        super(props);
        this.state = {country: this.props.country}
    }


     formatCountry = (country) =>{
        let position = [country.countryInfo.lat, country.countryInfo.long];
        let totalCases = country.cases;
        let countryName = country.country;
        let deaths = country.deaths;

        return {position, totalCases, countryName, deaths};

    }

    render(){
        let country = this.state.country;
        let data = this.formatCountry(country);
        return data.position === null ? null :(
        <Marker position={data.position}>
            <Popup maxWidth="800px" maxHeight="800px" autoPan="true">
                <TableContainer component={Paper}>
                     <Table aria-label="simple table">
                         <TableHead>
                             <TableRow>
                                 <TableCell>Country</TableCell>
                                 <TableCell>All time cases</TableCell>
                                 <TableCell>Deaths</TableCell>
                             </TableRow>
                         </TableHead>
                         <TableBody>
                             <TableCell align="right"><h2>{data.countryName}</h2></TableCell>
                             <TableCell align="right"><h2>{data.totalCases}</h2></TableCell>
                             <TableCell align="right">{data.deaths}</TableCell>
                         </TableBody>
                     </Table>
                </TableContainer>
            </Popup>
        </Marker>
        )
       
    }
}

export default MarkerAnalysis;