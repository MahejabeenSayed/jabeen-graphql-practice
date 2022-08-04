import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { STUDENT_DETAILS } from "../../../../services/queries";

const StudentDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(STUDENT_DETAILS, {
    variables: { id: `${id}` },
  });
  const studentDetails = data?.studentById;

  return (
    <>
      {studentDetails && (
        <div>
          First Name : {studentDetails.firstName} <br />
          Last Name : {studentDetails.lastName} <br />
          Full Name : {studentDetails.fullName} <br />
          Email : {studentDetails.email} <br />
        </div>
      )}
    </>
  );
};

export default StudentDetails;
