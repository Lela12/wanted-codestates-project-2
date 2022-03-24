import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';

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
