import { Route, Routes } from 'react-router';
import './App.css';
import LeaderBoard from './Components/LeaderBoard';
import HomePage from './Pages/HomePage';
import PlayerCard from './Components/PlayerCard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderBoard />}>
          <Route path=":index" element={<LeaderBoard />} />
        </Route>
        <Route path="/playerCard" element={<PlayerCard />}>
          <Route path=":username" element={<PlayerCard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
