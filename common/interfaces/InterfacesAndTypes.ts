type StackScreenInterface = {
  Home: undefined;
  ColorPalette: undefined | { item: { text: string; color: string } };
  ColorScheme: { data: { text: string; color: string }[]; title: string };
};

export { StackScreenInterface };
