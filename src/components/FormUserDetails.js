import React, { Component } from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, createMuiTheme, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
	};

  render() {
		const { values, handleChange } = this.props;
		const theme = createMuiTheme({})
		const styles = {

		}
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <AppBar position="static">
					<Typography variant="h6">Enter user details</Typography>
					</AppBar>
					<TextField 
						id="outlined-basic" 
						label="First Name" 
						variant="outlined"
						onChange={handleChange('firstName')}	
						defaultValue={values.firstName}
					/>
					<br />
					<TextField 
						id="outlined-basic" 
						label="Last Name" 
						variant="outlined"
						onChange={handleChange('lastName')}	
						defaultValue={values.lastName}
					/>
					<br />
					<TextField 
						id="outlined-basic" 
						label="Email" 
						variant="outlined"
						onChange={handleChange('email')}	
						defaultValue={values.email}
					/>
					<Button 
						variant="contained"
						color="primary"
						onClick={this.continue}
					>Continue</Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
