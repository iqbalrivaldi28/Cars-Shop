import './App.css';
import PraktikSatu from './praktik-satu/Praktik-Satu';

function App() {
  const carData = [
    {
      carName: 'Ford',
      carImg:
        'https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      carDescription: 'Mobil ford adalah mobil yang sangat bagus',
    },
    {
      carName: 'Toyota',
      carImg:
        'https://images.unsplash.com/photo-1559416523-140ddc3d238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0MjIxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      carDescription: 'Mobil toyota memiliki interior dan body yang kokoh',
    },
    {
      carName: 'Lamborghini',
      carImg:
        'https://images.unsplash.com/photo-1621135802920-133df287f89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA0MjYyNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      carDescription: 'Mobil Lamborghini memiliki kesan mewah dan mahal',
    },
  ];

  return (
    <>
      <div className="cards">
        {carData.map((item, index) => (
          <PraktikSatu key={index} nameCar={item.carName} descCar={item.carDescription} imgUrl={item.carImg} />
        ))}
      </div>
    </>
  );
}

export default App;
