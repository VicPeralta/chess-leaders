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
      <div>
        {leaders.map((leader) => (
          <Link key={leader.username} to={`/playercard/${leader.username}/${index}`}>
            <p>
              {leader.username}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default LeaderBoard;
