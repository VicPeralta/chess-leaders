import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMdArrowRoundBack } from 'react-icons/io';

const LeaderBoard = () => {
  const params = useParams();
  const { index } = params;
  const leaders = useSelector((state) => (state.chessData[index].data));
  return (
    <>
      <Link to="/">
        <IoMdArrowRoundBack />
      </Link>
      <ul>
        {leaders.map((leader) => (
          <li
            key={leader.rank}
          >
            {leader.username}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LeaderBoard;
