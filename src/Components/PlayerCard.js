import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerData } from '../Redux/chessLeaders/chess';

const PlayerCard = () => {
  const params = useParams();
  const dispath = useDispatch();
  const fetching = useSelector((state) => (state.fetching));
  const playerData = useSelector((state) => (state.playerData));
  const username = params;
  useEffect(() => (dispath(getPlayerData(username))), []);
  return (
    <>
      <Link to="/">
        <IoMdArrowRoundBack />
      </Link>
      {fetching && (
        <>
          <h2>Fetchind user data</h2>
        </>
      )}
      {!fetching && playerData && (
        <>
          <p>
            {playerData.name}
          </p>
        </>
      )}
    </>
  );
};

export default PlayerCard;
