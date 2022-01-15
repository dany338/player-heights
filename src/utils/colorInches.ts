const colorInches = (number: number): string => {
  if (+number > 80 ) {
    return 'terciary';
  }
  if (+number >= 70 && +number <= 80) {
    return 'secundary';
  }
  if (+number > 0 && +number < 70) {
    return 'primary';
  }
  return 'primary';
};

export default colorInches;