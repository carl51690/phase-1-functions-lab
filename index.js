function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }

function distanceFromHqInFeet(feet) {
    return Math.abs(264 * (feet - 42));
  }

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end)* 264;
  }

  function calculatesFarePrice(start, end) {
    const distance = Math.abs(start - end)* 264;
    if (distance < 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else (distance >= 2500) 
      return 'cannot travel that far';
    }