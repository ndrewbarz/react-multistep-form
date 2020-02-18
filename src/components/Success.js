import React from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, createMuiTheme, Typography } from '@material-ui/core';

const Success = ({values: {firstName, lastName}}) => {
		const theme = createMuiTheme({})
	
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <AppBar position="static">
						<Typography variant="h6">Success</Typography>
					</AppBar>
					<Typography variant="h1">Thank you {firstName} {lastName} for your submission</Typography>
        </>
      </MuiThemeProvider>
    );
}

export default Success;
