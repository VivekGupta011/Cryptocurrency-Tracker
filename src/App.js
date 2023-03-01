import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
        <Header/>
        {/* <Route path="/" element={ } />
        <Route path="/" element={ } /> */}
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
