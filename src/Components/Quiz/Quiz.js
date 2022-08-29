import AnswerOption from "../AnswerOption/AnswerOption";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="quiz-container">
      <h3 className="quiz-question">How would one say good bye in spanish?</h3>
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
