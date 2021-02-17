import { useState } from "react";
import { Chart } from "./components/Chart/Chart";
import { CountryPicker } from "./components/CountryPicker/CountryPicker";
import Container from '@material-ui/core/Container';
function App() {
  const [selectedCountry,setSelectedCountry] = useState('');

  return (
    <Container disableGutters={true}>
      <CountryPicker selectCountry={setSelectedCountry} currentCountry={selectedCountry}/>
      <Chart currentCountry={selectedCountry}/>
    </Container>
  );
}

export default App;
