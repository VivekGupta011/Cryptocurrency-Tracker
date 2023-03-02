import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Coinpage from './components/Coinpage';
import Homepage from './components/Homepage';
import Header from './components/Header';
import { makeStyles } from "@mui/styles";
import { minHeight } from '@mui/system';


// in material ui we use such kind of css
const useStyles=makeStyles(()=>({
  App:{
    backgroundColor:"#14161a",
    color:"white",
    minHeight:"100vh"
  }
}));

function App() {
  const classes=useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>  
          <Route path="/" element={<Header/>} exact/>
          <Route path="/coin" element={<Coinpage/>} exact/>
          <Route path="/homepage" element={<Homepage/>} exact/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
