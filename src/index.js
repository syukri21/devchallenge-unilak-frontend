import React from "react";
import ReactDOM from "react-dom";
import Login from "./login/login.js";
import { theme } from "./theme.js";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/dashboard.js";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Login} />
          </Switch>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
