import React from "react";
import Card from '@material-ui/core/Card';
import {withStyles } from '@material-ui/core/styles';
import {loginStyles} from "../styles";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


class Login extends React.Component {
	render(){
		const {classes} = this.props;
		return (
			<form className={classes.containerLogin} autocomplete="off"  >
				<Card className={classes.login} >
					<CardContent className={classes.loginTitle} >
						<Typography variant="headline" align="center" color="primary" >LOGIN</Typography>
					</CardContent>
					<div className={classes.logininput} >	
					 <TextField
				          id="userid"
				          label="User ID"
				          className={classes.userid}
				          margin="normal"
				        />
			        <TextField
			          id="userid"
			          label="Password"
			          className={classes.userid}
			          margin="normal"
			        />
				    </div>
    	   	        <CardActions className = {classes.loginaction} >
    	   	        	<div  >
					       <Button size="small" className={classes.btnLupapw} color="secondary" >
					          Lupa Password
					       </Button>
				       </div>
				       <div>
					       <Button component={Link}  to="/dashboard" size="large" variant="raised"   color="primary">
					          <Typography variant="subheading" className={classes.btnLogin}>Login</Typography>
					       </Button>
				       </div>
				    </CardActions>
				</Card>
			</form>

		)
	}
}


export default withStyles(loginStyles)(Login)