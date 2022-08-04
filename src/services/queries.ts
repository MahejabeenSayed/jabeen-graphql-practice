import { gql } from "@apollo/client";

export const COLLEGES_LIST = gql`
  {
    colleges {
      id
      name
      location
      rating
    }
  }
`;

export const STUDENTS_LIST = gql`
  {
    students {
      id
      firstName
      lastName
      fullName
      email
    }
  }
`;

export const STUDENT_DETAILS = gql`
  query students($id: ID!) {
    studentById(id: $id) {
      id
      firstName
      lastName
      fullName
      email
    }
  }
`;
