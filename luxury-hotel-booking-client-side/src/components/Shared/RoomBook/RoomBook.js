import { useLoaderData } from 'react-router-dom';
import Room from '../Room/Room';
import './RoomBook.css';

const RoomBook = () => {
  const rooms = useLoaderData();

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {rooms.map((room) => { return <Room key={room.id} room={room} />; })}
      </div>
    </div>
  );
};

export default RoomBook;
