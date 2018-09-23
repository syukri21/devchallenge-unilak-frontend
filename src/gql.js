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
  query project($id: String) {
    project(project: $id) {
      description
      stakeholder
      sprint
      stardate
      enddate
    }
  }
`;

const getOneUser = gql`
  query user($id: String) {
    user(user: $id) {
      namalengkap
      stream
    }
  }
`;

const getUidProject = gql`
  query user($id: String) {
    project(project: $id) {
      uid {
        namalengkap
        stream
        pointburn
        pointqueue
        pointremain
      }
    }
  }
`;

const getDateEvent =  gql`
{
  events{
    description
    location
    date
  }
}


`;



export {
  getQueryTempUser,
  getQueueAllProjects,
  getBestProduct,
  getAllProjectName,
  getDescription,
  getOneUser,
  getUidProject,
  getDateEvent
  
};
