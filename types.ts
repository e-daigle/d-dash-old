type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type Theme = {
  primary: Color;
  secondary: Color;
  background: Color;
  navborder: Color;
  navbackground: Color;
};

export type ImageProps = {
  src?: string;
  alt?: string;
};

export type NavLink = {
  link: string;
  displayName: string;
};

export type Column = {
  field: string;
  title: string;
};

export type RowAction = {
  name: string;
  onClick: (idx: number) => void;
};
