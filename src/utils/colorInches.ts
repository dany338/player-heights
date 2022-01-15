const colorInches = (number: number): string => {
  if (+number > 80 ) {
    return 'terciary';
  }
  if (+number >= 80 && +number <= 90) {
    return 'secundary';
  }
  if (+number > 0 && +number < 79) {
    return 'primary';
  }
  return 'primary';
};

export default colorInches;