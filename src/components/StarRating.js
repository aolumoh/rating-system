import Star from './Star';
import { useState } from 'react';
function StarRating() {

  const [currentStars, setStars] = useState(0);
  const totalStars = 5;
  const baseStars = [1, 2, 3, 4, 5];
  const messages = ['Terrible!', 'Had some issues', 'Good', 'Great', 'Amazing!'];
  
  const handleClick = (index) => {
    setStars(index + 1);
  }

  return (
    <section>
      <div className='flex'>
        {baseStars.map((star, index) => (
          <Star key={index} 
          selected={index < currentStars} 
          onClick={() => handleClick(index)} />
        ))}
      </div>
      <h2>{currentStars ? `${messages[currentStars - 1]}` : 'Rate this'}</h2>
    </section>
  );
}

export default StarRating;