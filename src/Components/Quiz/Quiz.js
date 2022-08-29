import AnswerOption from "../AnswerOption/AnswerOption";
import "./Quiz.css";

const Quiz = ({ question, correct_answer, incorrect_answers }) => {
  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{question}</h3>
      <div className="answers-section">
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
      </div>
    </div>
  );
};

export default Quiz;
