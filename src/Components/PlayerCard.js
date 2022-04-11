import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerData } from '../Redux/chessLeaders/chess';
import Fetching from './Fetching';

const PlayerCard = () => {
  const params = useParams();
  const dispath = useDispatch();
  const fetching = useSelector((state) => (state.fetching));
  const playerData = useSelector((state) => (state.playerData));
  const { username } = params;
  const { index } = params;
  useEffect(() => (dispath(getPlayerData(username))), []);
  return (
    <>
      <Link to={`/leaderboard/${index}`}>
        <IoMdArrowRoundBack />
      </Link>
      {
        fetching && (
          <>
            <Fetching />
          </>
        )
      }
      {
        !fetching && playerData && (
          <>
            <p>
              {playerData.name}
            </p>
            <img src={playerData.avatar} alt="Player avatar" />
          </>
        )
      }
    </>
  );
};

export default PlayerCard;
