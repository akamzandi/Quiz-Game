import AnswerOption from "../AnswerOption/AnswerOption";
import "./Quiz.css";

const Quiz = ({ question, correct_answer, all_answers, id }) => {
  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const renderQuestion = () => {
    return `${id + 1}) ${question}`;
  };

  const renderShuffledAnswerOptions = () => {
    shuffleArray(all_answers);
    return all_answers.map((item) => <AnswerOption info={item} />);
  };

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{renderQuestion()}</h3>
      <div className="answers-section">{renderShuffledAnswerOptions()}</div>
    </div>
  );
};

export default Quiz;
