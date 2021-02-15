type StackScreenInterface = {
  Home: undefined;
  ColorPalette: undefined | { item: { colorName: string; hexCode: string } };
  ColorScheme: {
    data: { colorName: string; hexCode: string }[];
    title: string;
  };
};

export { StackScreenInterface };
