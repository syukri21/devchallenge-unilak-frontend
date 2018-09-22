import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CardContent from "@material-ui/core/CardContent";
import {Query} from "react-apollo";
import {getUidProject} from "../../../gql"
import Typography from "@material-ui/core/Typography"

class BestTalentPeformance extends React.Component {


  constructor(){
    super()
    this.state = {
      data : null
    }
  }


 componentWillReceiveProps(nextProps) {
   this.setState({
    data : nextProps.passUid
   });
 }



  getTable(){

    return (
      <Query
        query={getUidProject}
        variables={{
          "id": this.state.data
        }}
      >
        {({ loading, data, error }) => {
          if (loading)
          return <Typography variant="caption"> loading... </Typography>;
          return (
                   <Table>
            <TableHead>
              <TableRow>
                <TableCell numeric={true} padding="dense">
                  No
                </TableCell>
                <TableCell>Nama</TableCell>
                <TableCell>Stream</TableCell>
                <TableCell numeric={true} padding="dense">
                  Point Burn
                </TableCell>
                <TableCell numeric={true} padding="dense">
                  Point Remaining
                </TableCell>
                <TableCell numeric={true} padding="dense">
                  Point Queue
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            
            { data.project != null ? data.project.uid.map((e, i) => (
                <TableRow
                  key={i}
                  style={{ background: i % 2 === 0 ? "lightskyblue" : "white" }}
                >
                  <TableCell numeric={true} padding="dense">
                    {i + 1}
                  </TableCell>
                  <TableCell>{e.namalengkap}</TableCell>
                  <TableCell>{e.stream}</TableCell>
                  <TableCell numeric={true} padding="dense">
                    {e.pointburn}
                  </TableCell>
                  <TableCell numeric={true} padding="dense">
                    {e.pointremain}
                  </TableCell>
                  <TableCell numeric={true} padding="dense">
                    {e.pointqueue}
                  </TableCell>
                </TableRow>
              )) : <Typography variant="caption" >Choose Project</Typography>}
            </TableBody>
          </Table>
          );
        }}
      </Query>
    );
  }


  render() {
    return (
      <Card>
        <CardHeader title="Best Talent Peformance" />
        <CardContent>
        {this.getTable()}
        </CardContent>
      </Card>
    );
  }
}

export default BestTalentPeformance;
