type StackScreenInterface = {
  Home:
    | undefined
    | {
        selectedColors: {
          paletteName: string;
          data: { colorName: string; hexCode: string }[];
        };
      };
  ColorPalette: undefined | { item: { colorName: string; hexCode: string } };
  ColorScheme: {
    data: { colorName: string; hexCode: string }[];
    title: string;
  };
  ColorPaletteModal: undefined;
};

type RootStackScreenInterface = {
  Main: undefined;
  ColorPaletteModal: undefined;
};

export { StackScreenInterface, RootStackScreenInterface };
