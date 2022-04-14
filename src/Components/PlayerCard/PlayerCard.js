import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerData } from '../../Redux/chessLeaders/chess';
import Fetching from '../Fetching/Fetching';
import SearchBar from '../SearchBar/SearchBar';
import noPhoto from '../../assets/noPhoto.svg';
import './PlayerCard.css';

const PlayerCard = () => {
  const params = useParams();
  const { index } = params;
  const { username } = params;
  const dispath = useDispatch();
  useEffect(() => (dispath(getPlayerData(username))), []);
  const fetching = useSelector((state) => (state.fetching));
  const chessData = useSelector((state) => (state.chessData[index].data));
  const playerData = useSelector((state) => (state.playerData));
  const generalInfo = chessData.find((player) => (player.username === username));
  const dummySearch = () => {
  };
  const back = `/leaderboard/${index}`;
  return (
    <>
      <SearchBar
        searchHandler={dummySearch}
        backText="BACK"
        backPath={back}
        searchText=" "
      />

      {
        fetching && (
          <>
            <Fetching />
          </>
        )
      }
      {
        !fetching && playerData && (
          <div className="player-info">
            {playerData.avatar && (<img src={playerData.avatar} alt="Player avatar" />)}
            {!playerData.avatar && (<img src={noPhoto} alt="Player avatar" />)}
            <p className="player-name highlighted" data-testid="player-name">
              {playerData.name}
            </p>
            <table>
              <tbody>
                <tr>
                  <td className="highlighted">Rank #:</td>
                  <td>{generalInfo.rank}</td>
                </tr>
                <tr>
                  <td className="highlighted">User name:</td>
                  <td>{playerData.username}</td>
                </tr>
                <tr>
                  <td className="highlighted">Title:</td>
                  <td>{playerData.title}</td>
                </tr>
                <tr>
                  <td className="highlighted">Score:</td>
                  <td>{generalInfo.score}</td>
                </tr>
                <tr>
                  <td className="highlighted">Games won:</td>
                  <td>{generalInfo.win_count}</td>
                </tr>
                <tr>
                  <td className="highlighted">Games lost:</td>
                  <td>{generalInfo.loss_count}</td>
                </tr>
                <tr>
                  <td className="highlighted">Games drawn:</td>
                  <td>{generalInfo.draw_count}</td>
                </tr>
                <tr>
                  <td className="highlighted">Location:</td>
                  <td>{playerData.location}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      }
    </>
  );
};

export default PlayerCard;
