import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainScreen from './screens/MainScreen/MainScreen';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
