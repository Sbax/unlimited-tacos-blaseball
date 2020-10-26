export const colors = {
  palatinatePurple: '#64376e',
  deepFuchsia: '#b063c1',
  tulipTree: '#EBB43E',
  bunker: '#141414',
  concrete: '#f3f3f3',
};

export const theme = {
  offBlack: colors.bunker,
  offWhite: colors.concrete,

  primary: colors.palatinatePurple,
  secondary: colors.deepFuchsia,
  accent: colors.tulipTree,
};

export const fontFamily = {
  display: "'Russo One', sans-serif",
  sans: "'Open Sans', sans-serif",
};

export const breakpoints = {
  mobile: `${576}px`,
  tablet: `${768}px`,
  desktop: `${992}px`,
  extraLarge: `${1200}px`,
};

export const device = {
  mobile: `(min-width: ${576}px)`,
  tablet: `(min-width: ${768}px)`,
  desktop: `(min-width: ${992}px)`,
  extraLarge: `(min-width: ${1200}px)`,
};
