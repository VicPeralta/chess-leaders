import { useSelector } from 'react-redux';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Fetching from './Fetching';
import Category from './CategoryCard';
import './CategoryList.css';

const CategoryList = () => {
  const fetching = useSelector((state) => (state.fetching));
  const chessData = useSelector((state) => (state.chessData));
  const [filter, setFilter] = useState();
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  return (
    <>
      {fetching && (<Fetching />)}
      {!fetching && chessData && (
        <>
          <div className="search-bar">
            <BsSearch size={20} />
            <input type="text" placeholder="Search" className="search" onChange={handleFilter} />
          </div>
          <div className="category-container">
            {!filter && (
              <>
                {
                  chessData.map((category) => (
                    <Category
                      key={category.id}
                      id={category.id}
                      icon={category.name}
                      name={category.name}
                      average={category.average}
                    />
                  ))
                }
              </>
            )}
            {filter && (
              <>
                {
                  chessData.filter((category) => (category.name.includes(filter)))
                    .map((category) => (
                      <Category
                        key={category.id}
                        id={category.id}
                        icon={category.name}
                        name={category.name}
                        average={category.average}
                      />
                    ))
                }
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CategoryList;
