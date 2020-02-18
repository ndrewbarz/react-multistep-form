import React, { Component } from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, createMuiTheme, Typography, ListItemText } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
		e.preventDefault();
		// sending data to API //
    this.props.nextStep();
	};

	back = e => {
    e.preventDefault();
    this.props.prevStep();
	};

  render() {
		const { values: {firstName, lastName, email, location, bio} } = this.props;
		const theme = createMuiTheme({})
	
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <AppBar position="static">
						<Typography variant="h6">Confirm user data</Typography>
					</AppBar>
					<List>
						<ListItem>
							<ListItemText
								primary="First Name"
								secondary={firstName}
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								primary="Last Name"
								secondary={lastName}
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								primary="Email"
								secondary={email}
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								primary="Location"
								secondary={location}
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								primary="Bio"
								secondary={bio}
							/>
						</ListItem>
          </List>
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
					>Confirm & Continue</Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
