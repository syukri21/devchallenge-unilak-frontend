import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { graphql } from "react-apollo";
import { getAllProjectName } from "../../../gql";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class TeamSelectDropdown extends React.Component {
  state = {
    value: null
  };

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  componentDidMount() {
    this.setState({
      value: !this.props.data.loading && this.props.data.projects[0].projectnama
    });
  }

  render() {
    const { classes } = this.props;
    const { data } = this.props;
    if (data.loading) {
      return <h1>tai</h1>;
    } else {
      return (
        <TextField
          id="standard-select-currency-native"
          select
          label="Pilih Project"
          className={classes.textField}
          value={this.state.value}
          onChange={e => this.handleChange(e)}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          {data.projects.map((e, i) => (
            <option key={i} value={e.project}>
              {e.projectnama}
            </option>
          ))}
        </TextField>
      );
    }
  }
}

export default withStyles(styles)(
  graphql(getAllProjectName)(TeamSelectDropdown)
);
