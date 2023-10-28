import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  handleSelectAnswer,
  answerState,
  onSelect,
}) {
  const shuffleAnswers = useRef();

  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...answers];
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffleAnswers.current.map((answer) => {
        const isSeleted = answer === selectedAnswer;
        let cssClass = "";

        if (answerState === "answered" && isSeleted) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSeleted
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => {
                onSelect(answer);
              }}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
