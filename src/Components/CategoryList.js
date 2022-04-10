import { useSelector } from 'react-redux';
import Fetching from './Fetching';
import Category from './CategoryCard';
import './CategoryList.css';

const CategoryList = () => {
  const fetching = useSelector((state) => (state.fetching));
  const chessData = useSelector((state) => (state.chessData));
  return (
    <>
      {fetching && (<Fetching />)}
      {chessData && (
        <div className="category-container">
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
        </div>
      )}
    </>
  );
};

export default CategoryList;
