import './Praktik-Satu.css';

const PraktikSatu = (Props) => {
  const { imgUrl, nameCar, descCar } = Props;

  return (
    <div className="card">
      <img style={{ width: '100%', height: '200px', borderRadius: '10px 10px 0px 0px' }} src={imgUrl} alt={nameCar} />
      <div className="container">
        <h4>
          <b>{nameCar}</b>
        </h4>
        <p>{descCar}</p>
      </div>
    </div>
  );
};

export default PraktikSatu;
