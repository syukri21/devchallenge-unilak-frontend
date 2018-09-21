import { gql } from "apollo-boost";

const getQueryTempUser = gql`
  {
    users {
      user
      namalengkap
      stream
      pointburn
      pointqueue
      pointremain
    }
  }
`;

const getQueueAllProjects = gql`
  {
    projects {
      id
      projectnama
      unit
      stakeholder
      sprint
      status
    }
  }
`;

const getBestProduct = gql`
  {
    projects {
      id
      projectnama
      rating
    }
  } 
`;


export { getQueryTempUser, getQueueAllProjects, getBestProduct };
