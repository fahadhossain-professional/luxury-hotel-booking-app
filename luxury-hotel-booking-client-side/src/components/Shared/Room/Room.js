import { Link } from 'react-router-dom';
import './Room.css';

const Room = ({ room }) => {
  const {
    img, name, dsc, price, id
  } = room;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <p className="card-text">
            Start from $
            {price}
            /night
          </p>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{dsc}</p>
          <Link className="btn btn-primary" to={`/book/${id}`}>Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
