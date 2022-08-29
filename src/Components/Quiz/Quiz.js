import AnswerOption from "../AnswerOption/AnswerOption";
import "./Quiz.css";

const Quiz = ({ question, correct_answer, all_answers, id }) => {
  const answerOptionComponents = all_answers.map((item) => (
    <AnswerOption info={item} />
  ));

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{`${id + 1}) ${question}`}</h3>
      <div className="answers-section">{answerOptionComponents}</div>
    </div>
  );
};

export default Quiz;
