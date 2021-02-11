const isItDarkOrNot = (hexColor: string) => {
  return parseInt(hexColor.replace('#', ''), 16) > 0xffffff / 1.1
    ? 'black'
    : 'white';
};

export { isItDarkOrNot };
