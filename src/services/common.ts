const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/graphql`;

const query = `mutation mutateQuery($var: StudentInput) {
    createStudent_validation(input: $var)
  }`;

export const addStudentToGQL = async () => {
  debugger;
  fetch(BASE_URL, {
    method: "post",
    headers: {
      "content-type": "application/json",
      body: JSON.stringify({
        mutation: query,
        variables: {
          var: {
            collegeId: "col-2",
            firstName: "jabeen",
            lastName: "sayed",
            email: "dsfsd@gmail.com",
          },
        },
      }),
    },
  })
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((err) => {
      debugger;
      console.log(err);
    });
};
//   return response.json();
