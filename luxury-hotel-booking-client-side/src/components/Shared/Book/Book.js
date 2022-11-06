import { useLoaderData } from 'react-router-dom';
import './Book.css';

const Book = () => {
  const book = useLoaderData();
  const {
    img, dsc, name, price
  } = book;

  return (
    <div className="container">
      <div className="card mb-3">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{dsc}</p>
          <p className="card-text"><small className="text-muted">{price}</small></p>
        </div>
      </div>
    </div>

  );
};

export default Book;
