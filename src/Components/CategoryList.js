import { useSelector } from 'react-redux';
import { useState } from 'react';

import Fetching from './Fetching';
import Category from './CategoryCard';
import './CategoryList.css';
import SearchBar from './SearchBar';

const CategoryList = () => {
  const fetching = useSelector((state) => (state.fetching));
  const chessData = useSelector((state) => (state.chessData));
  const [filter, setFilter] = useState();
  const handleFilter = (value) => {
    setFilter(value);
  };
  return (
    <>
      {fetching && (<Fetching />)}
      {!fetching && chessData && (
        <>
          <SearchBar searchHandler={handleFilter} backText="" backPath="/" searchText="Categories" />
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
