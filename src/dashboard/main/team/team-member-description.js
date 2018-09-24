import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react"
import Button from "@material-ui/core/Button"
import {getOneUser} from "../../../gql"
import {Query}  from "react-apollo";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import CardContent from "@material-ui/core/CardContent";
import Loader from "../loader/loader"
import gambar from "../../../assets/profile.png"
import {Bar} from "react-chartjs-2"


const dats = {

    labels: ["hello", "not","sick"],
    datasets:[
      {
        label:"tau",
        data:[
          12,
          23,
          23,
        ],
        backgroundColor:[
          "rgb(255, 0, 0)",
          "rgb(255, 0, 255)",
          "rgb(255, 255, 0)"
        ]
      }
    ]
  

}

class TeamMemberDescription extends React.Component{

	constructor(){
		super()
		this.state = {
			open: false,
			user: null,
      chartset: (pb, pr, pq) => ({
            labels: ["Point Burn", "Point Remaining","Point Queue"],
            datasets:[
              {
                label:"Point",
                data:[
                  pb,
                  pr,
                  pq,
                ],
                backgroundColor:[
                  "rgb(255, 0, 0)",
                  "rgb(0, 0, 255)",
                  "rgb(0, 255, 0)"
                ]
              }
            ]
      })
		}
	}


	handleClose(){
		this.props.handleClose();
	}

  handleDisAgree(){
    this.handleClose();
  }

	render(){
		return(

	<Dialog
        open={this.props.open === undefined ? false : this.props.open}
        aria-labelledby="Member"
        aria-describedby="member description"
      >
      	<Query
      		query={getOneUser}
      		variables={{"id": this.props.user}}
      		>
      		{({loading, data}) => {
      			if(loading)return <div style={{position:"absolute",minWidth:"400px"}} ><Loader/></div>;
      			return (
      				<Grid container style={{minWidth: "600px"}} alignItems="center" >
      					<Grid item xs={4} >
                  <img  src={gambar} style={{width:"100%", height:"100%"}}  />
      					</Grid>
      					<Grid item xs={8}  component={CardContent}   >
      						<Grid container  > 
      							<Grid item  xs={3} ><Typography varian="subheading" >Nama</Typography></Grid>
      							<Grid item  xs={1} >:</Grid>
      							<Grid item xs={8} ><Typography varian="subheading" >{data.user.namalengkap}</Typography></Grid>
      						</Grid>
      						<Grid container>
      							<Grid item  xs={3} ><Typography varian="subheading" >Stream</Typography></Grid>
      							<Grid item  xs={1} >:</Grid>
      							<Grid item xs={8} ><Typography varian="subheading" >{data.user.stream}</Typography></Grid>
      						</Grid>
      						<Grid container >
      							<Grid item  xs={3} ><Typography varian="subheading" >Level</Typography></Grid>
      							<Grid item  xs={1} >:</Grid>
      							<Grid item xs={8} ><Typography varian="subheading" >{data.user.level}</Typography></Grid>
      						</Grid>
      					</Grid>
                <Grid container>
                  <Grid item xs={8} >
                    <Bar
                      data={this.state.chartset(data.user.pointburn, data.user.pointremain, data.user.pointqueue)}
                      options={{maintainAspectRatio: false}}
                      displayTitle={false} />
                  </Grid>
                </Grid>
                <Grid container justify="center" >
			          <Button onClick={() => this.handleDisAgree()} color="primary">
			            Back
			          </Button>
                </Grid>
			        </Grid>
			       )

      		}}
        </Query>
      </Dialog>


		)
	}
}

export default TeamMemberDescription;