import { Route, Routes } from 'react-router';
import LeaderBoard from './Components/LeaderBoard/LeaderBoard';
import HomePage from './Pages/HomePage';
import PlayerCard from './Components/PlayerCard/PlayerCard';
import './App.css';

function App() {
  return (
    <div className="App" data-testid="app-element">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderBoard />}>
          <Route path=":index" element={<LeaderBoard />} />
        </Route>
        <Route path="/playerCard" element={<PlayerCard />}>
          <Route path=":username/:index" element={<PlayerCard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
