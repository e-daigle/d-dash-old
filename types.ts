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

//Link for navigation component
export type NavLink = {
  link: string;
  displayName: string;
};

//DataTable column
export type Column = {
  field: string;
  title: string;
};

//Text inside of the Dialog
export interface DialogText {
  title?: string;
  message?: string;
  cancelButton?: string;
  confirmButton?: string;
}

//Config of the dialog including text and callback
export interface DialogConfig extends DialogText {
  actionCallback?: (confirmed: boolean) => void;
}

//Action at the end of a DataTable row
export type RowMenuAction = {
  name: string;
  onClick: ((idx: string) => void );
  needsConfirmation?: boolean;
  dialogText?: DialogText;
};

//Dropdown menu action
export type MenuAction = {
  name: string;
  onClick: () => void;
  needsConfirmation?: boolean;
  dialogText?: DialogText;
};
