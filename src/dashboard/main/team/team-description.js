import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { getDescription } from "../../../gql";
import { Query } from "react-apollo";
import moment from "moment";

class TeamDescription extends React.Component {
  state = {
    value: null,
    isLoad: false
  };

  displayTeamDescription() {
    return (
      <Table>
        <Query query={getDescription} variables={{ id: this.state.value }}>
          {({ loading, error, data, refetch, networkStatus }) => {
            return (
              <TableBody>
                <TableRow>
                  <TableCell padding="dense">Description</TableCell>
                  <TableCell padding="dense" type="number">
                    :
                  </TableCell>
                  <TableCell>
                    {" "}
                    <p>
                      {" "}
                      {!loading &&
                        data.project != null &&
                        data.project.description}{" "}
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell padding="dense">Stake Holder</TableCell>
                  <TableCell padding="dense" type="number">
                    :
                  </TableCell>
                  <TableCell style={{ minWidth: "300px" }}>
                    {" "}
                    {!loading &&
                      data.project != null &&
                      data.project.stakeholder}{" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell padding="dense">Stream</TableCell>
                  <TableCell padding="dense" type="number">
                    :
                  </TableCell>
                  <TableCell>
                    {" "}
                    {!loading &&
                      data.project != null &&
                      data.project.sprint}{" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell padding="dense">Start Date</TableCell>
                  <TableCell padding="dense" type="number">
                    :
                  </TableCell>
                  <TableCell>
                    {" "}
                    {!loading &&
                      data.project != null &&
                      moment(data.project.stardate).format("DD MMMM YYYY").toString()}{" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell padding="dense">End Date</TableCell>
                  <TableCell padding="dense" type="number">
                    :
                  </TableCell>
                  <TableCell>
                    {" "}
                    {!loading &&
                      data.project != null &&
                      moment(data.project.enddate).format("DD MMMM YYYY").toString()}{" "}
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          }}
        </Query>
      </Table>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.passValue,
      isLoad: true
    });
  }

  render() {
    return (
      <div>
        {this.displayTeamDescription()}
      </div>
    );
  }
}

export default TeamDescription;
