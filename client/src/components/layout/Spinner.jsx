import spinner from '../../img/spinner.gif';

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        style={{ display: 'block', margin: 'auto', width: '200px' }}
        alt="Loading..."
      />
    </>
  );
};

export default Spinner;
