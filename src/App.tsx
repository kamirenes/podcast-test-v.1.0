import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
