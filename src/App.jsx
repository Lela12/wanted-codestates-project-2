import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import SelectTab from './components/SelectTab';
import MainPage from './pages/MainPage';
import RankPage from './pages/RankPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Profile />} /> */}
        {/* <Route path="/" element={<Selector />} /> */}
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/rank" element={<RankPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
