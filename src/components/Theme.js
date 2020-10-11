import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({ palette: {
  primary: green,
} });

export default function Theme(props: IThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}
