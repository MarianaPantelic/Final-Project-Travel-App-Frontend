import React from "react";
import { useParams } from "react-router-dom";

const ShowQuestion = (props) => {

  const { id } = useParams();
  const foundQuestion = props.showQuestionDetails.find(
    (question) => id == question._id
  );
  console.log("question"+foundQuestion);

  return (
    <>
      <h1 style={{ marginTop: "10rem" }}>This is to show question</h1>
      <div>
        <h1>Answers</h1>

        {
          foundQuestion ? 
          (<p
            dangerouslySetInnerHTML={{
              __html: foundQuestion.content,
            }} 
          ></p>) : "Question content not found"
        }

         {/* <p
            dangerouslySetInnerHTML={{
              __html: question.content,
            }} 
          ></p> */}

      </div>
    </>
  );
};

export default ShowQuestion;
