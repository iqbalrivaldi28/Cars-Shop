import './App.css';
import { Products } from './data/Product';
import PraktikSatu from './praktik-satu/Praktik-Satu';

function App() {
  return (
    <>
      <div className="cards">
        {Products.map((item) => (
          <PraktikSatu key={item.id} nameCar={item.nama} descCar={item.deskripsi} imgUrl={item.imageURL} />
        ))}
      </div>
    </>
  );
}

export default App;
