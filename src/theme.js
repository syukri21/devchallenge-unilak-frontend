import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
	 palette: {
	  primary: {
	    light: "#7BCCF3",
	    main: "#53b9ec",
	    dark:"#2FA8E2",
	  },
	  secondary: {
	    light: "#757C86",
	    main: "#59616e",
	    dark: "#414957",
	  },
	   error: {
	    light: "#FF7777",
	    main: "#f55151",
	    dark: "#E12A2A",
	  },
	},
});

export {theme};