import React, { Component } from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, createMuiTheme, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
	};

	back = e => {
    e.preventDefault();
    this.props.prevStep();
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
					<Typography variant="h6">Enter personal details</Typography>
					</AppBar>
					<TextField 
						id="outlined-basic" 
						label="Location" 
						variant="outlined"
						onChange={handleChange('location')}	
						defaultValue={values.location}
					/>
					<br />
					<TextField 
						id="outlined-basic" 
						label="Bio" 
						variant="outlined"
						onChange={handleChange('bio')}	
						defaultValue={values.bio}
					/>
					<br />
					<Button 
						variant="contained"
						color="primary"
						onClick={this.back}
					>Back</Button>
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

export default FormPersonalDetails;
