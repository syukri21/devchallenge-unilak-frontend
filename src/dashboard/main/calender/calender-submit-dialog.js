import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import {addEvent,getDateEvent} from "../../../gql";
import moment from "moment"
import { Mutation } from "react-apollo";


class CalenderSubmitDialog extends React.Component {

constructor(){
  super()
  this.state = {
    open: false,
    note: "s",
    date: moment().format('YYYY-MM-DD[T]HH:mm:ss')

  }
}
  
 


  handleDisAgree(){
    this.props.handleNote(false);
  }


  render() {
    return (
      <Dialog
        open={this.props.openState.open}
        onClose={this.handleClose}
        aria-labelledby="Note"
        aria-describedby="Event Schedule"
      >
        <DialogTitle id="alert-dialog-title">
          {"Konfirmasi Tanggal ?"}
          </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
           { this.props.openState.data !== null && this.props.openState.data.length >= 5 && this.props.openState.date !== null ? `Apakah anda yakin akan akan menyimpan tanggal ${moment(this.props.openState.date).format("MMMM DD YYYY")} sebagai ${this.props.openState.data} ?` : "Isi note terlebih dahulu lima character di butuhkan"}
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.handleDisAgree()} color="primary">
            Tidak
          </Button>
          { this.props.openState.data !== null && this.props.openState.data.length >= 5 && this.props.openState.date !== null ?
            <Mutation mutation={addEvent}
              awaitRefetchQueries={true}
              refetchQueries={()=>[ {
                query: getDateEvent,
              } ]}

             >
            {(addEvent, {data}) => (
          <Button onClick={() => {

            const date = Date.now().toString();
            const dateprops = this.props.openState.date;
            const data = this.props.openState.data;
            addEvent({variables: {
                          "id": date,
                          "date": dateprops,
                          "description": data
                        }})

            this.setState({
              open: false
            })

          }} color="primary" autoFocus>
            Ya
          </Button>

              )}

          </Mutation>
          :null}
        </DialogActions>
      </Dialog>
    );
  }
}

export default CalenderSubmitDialog;
