import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { addStudentToGQL } from "../../../../services/common";

interface StudentData {
  firstName: string;
  lastName: string;
  email: string;
}

const AddStudent = () => {
  const [inputData, setInputData] = useState({} as StudentData);
  const [addStudentDetails, { loading, error, data }] = useMutation(gql`
    mutation mutateQuery($var: StudentInput) {
      createStudent_validation(input: $var)
    }
  `);

  const setData = (field: string, value: string) => {
    const copy: any = { ...inputData };
    copy[field] = value;
    setInputData(copy);
  };

  const handleSubmit = () => {
    // const res = await addStudentToGQL();
    debugger;
    addStudentDetails({
      variables: {
        var: { ...inputData, collegeId: "col-2" },
      },
    });
    // const { loading, error, data } = useQuery(
    //   gql`
    //     mutation mutateQuery($var: StudentInput) {
    //       createStudent_validation(input: $var)
    //     }
    //   `,
    //   {
    //     variables: {
    //       var: {
    //         collegeId: "col-2",
    //         firstName: "jabeen",
    //         lastName: "sayed",
    //         email: "dsfsd@gmail.com",
    //       },
    //     },
    //   }
    // );
  };

  if (loading) return <div>Submitting....</div>;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            onChange={(e) => setData("firstName", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            id="lastname"
            type="text"
            onChange={(e) => setData("lastName", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setData("email", e.target.value)}
          />
        </div>
        <input type="submit" />
        {/* <button type="submit">Submit</button> */}
      </form>
    </>
  );
};

export default AddStudent;
