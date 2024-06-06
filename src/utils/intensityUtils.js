export const getColorByIntensity = (intensity) => {
    switch (intensity) {
      case 1:
        return "yellow";
      case 2:
        return "orange";
      case 3:
        return "red";
      default:
        return "white";
    }
  };
  
  export const getBorderByIntensity = (intensity) => {
    switch (intensity) {
      case 1:
        return "3px solid yellow";
      case 2:
        return "3px solid orange";
      case 3:
        return "3px solid red";
      default:
        return "none";
    }
  };
  