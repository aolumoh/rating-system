import { FaStar } from 'react-icons/fa';

function Star({ selected, onClick }) {
  const gold = 'gold'; //////////GET COLOR CODES FOR THESE
  const gray = 'gray'; /////////COOOOOLLOORORRR CCODOEEESSSSS
  const color = selected ? gold : gray;
  return (
    <div>
      <FaStar
        className='icon'
        style={{ color: color, cursor: 'pointer'}}
        onClick={onClick}>
      </FaStar>
    </div>
  );
}
export default Star;