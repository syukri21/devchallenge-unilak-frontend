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

const getAllProjectName = gql`
  {
    projects {
      project
      projectnama
    }
  }
`;

const getDescription = gql`
  query user($id: String) {
    project(project: $id) {
      description
      stakeholder
      sprint
      stardate
      enddate
    }
  }
`;

export {
  getQueryTempUser,
  getQueueAllProjects,
  getBestProduct,
  getAllProjectName,
  getDescription
};
