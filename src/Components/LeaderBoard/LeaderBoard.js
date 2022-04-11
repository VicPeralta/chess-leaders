import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Category from '../CategoryCard/CategoryCard';
import Leader from '../Leader/Leader';
import './LeaderBoard.css';

const LeaderBoard = () => {
  const params = useParams();
  const { index } = params;
  const [filter, setFilter] = useState();
  const leaders = useSelector((state) => (state.chessData[index]));
  const filterHandler = (value) => {
    setFilter(value);
  };

  return (
    <>
      <SearchBar backText="HOME" backPath="/" searchHandler={filterHandler} searchText="Player" />
      <Category
        id={Number(index)}
        name={leaders.name}
        average={leaders.average}
        detailButton={false}
      />
      {!filter && (
        <div className="leader-container">
          {
            leaders.data.map((leader) => (
              <Leader
                key={leader.rank}
                index={Number(index)}
                rank={leader.rank}
                username={leader.username}
              />
            ))
          }
        </div>
      )}
      {filter && (
        <div className="leader-container">
          {
            leaders.data.filter((leader) => (leader.username.includes(filter)))
              .map((leader) => (
                <Link key={leader.username} to={`/playercard/${leader.username}/${index}`}>
                  <p>
                    {leader.username}
                  </p>
                </Link>
              ))
          }
        </div>
      )}
    </>
  );
};

export default LeaderBoard;
