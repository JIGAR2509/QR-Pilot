interface Fonts {
  thin: string;
  thinItalic: string;
  light: string;
  lightItalic: string;
  normal: string;
  normalItalic: string;
  medium: string;
  mediumItalic: string;
  bold: string;
  boldItalic: string;
}

export const fontStyle = {
  aeonik: {
    air: 'Aeonik-Air',
    airItalic: 'Aeonik-Airtalic',
    thin: 'Aeonik-Thin',
    thinItalic: 'Aeonik-ThinItalic',
    light: 'Aeonik-Light',
    lightItalic: 'Aeonik-LightItalic',
    normal: 'Aeonik-Regular',
    normalItalic: 'Aeonik-RegularItalic',
    medium: 'Aeonik-Medium',
    mediumItalic: 'Aeonik-MediumItalic',
    bold: 'Aeonik-Bold',
    boldItalic: 'Aeonik-BoldItalic',
    black: 'Aeonik-Black',
    blackItalic: 'Aeonik-BlackItalic',
  },
};

export const fonts: Fonts = {
  thin: fontStyle.aeonik.thin,
  thinItalic: fontStyle.aeonik.thinItalic,
  light: fontStyle.aeonik.light,
  lightItalic: fontStyle.aeonik.lightItalic,
  normal: fontStyle.aeonik.normal,
  normalItalic: fontStyle.aeonik.normalItalic,
  medium: fontStyle.aeonik.medium,
  mediumItalic: fontStyle.aeonik.mediumItalic,
  bold: fontStyle.aeonik.bold,
  boldItalic: fontStyle.aeonik.boldItalic,
};
