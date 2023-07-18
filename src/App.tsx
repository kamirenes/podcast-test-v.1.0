import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {MainScreen} from './screens/MainScreen/MainScreen';
import {PodcastDetailsScreen} from './screens/PodcastDetailsScreen/PodcastDetailsScreen';
import ChapterDetailsScreen from './screens/ChapterDetailsScreen/ChapterDetailsScreen';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/podcast/:id/episode/:episodeId" element={<ChapterDetailsScreen/>} />
      </Routes>
      <Routes>
        <Route path="/podcast/:id" element={<PodcastDetailsScreen/>} />
      </Routes>
      <Routes>
        <Route path="/" element={<MainScreen/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
