import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react"
import Button from "@material-ui/core/Button"

class TeamMemberDescription extends React.Component{

	constructor(){
		super()
		this.state = {
			open: false
		}
	}


  componentWillReceiveProps(nextProps) {
    this.setState({

      open: nextProps.open

    });
  }

	handleClose(){
		this.setState({
			open: false
		});
	}

  handleDisAgree(){
    this.handleClose();
  }

	render(){
		return(

			  <Dialog
        open={this.state.open === undefined ? false : this.state.open}
        aria-labelledby="Member"
        aria-describedby="member description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Syukri"}
          </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Test
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.handleDisAgree()} color="primary">
            Back
          </Button>
        </DialogActions>
      </Dialog>


		)
	}
}

export default TeamMemberDescription;