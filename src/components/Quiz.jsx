import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [displayResult, setDisplayResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [response, setResponse] = useState({
    score: 0,
    rightAnswers: 0,
    wrongAnswers: 0,
  });
  const [click, setClick] = useState(0);
  const { question, options, rightAnswer } =
    questions && questions.length > 0 ? questions[currentQuestion] : {};

  useEffect(() => {
    const questionData = async () => {
      try {
        const response = await fetch("./questionData.json");
        const data = await response.json();
        setQuestions(data.questions);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    questionData();
  }, []);

  const onClickNext = () => {
    setClick(0);
    setSelectedAnswerIndex(null);
    setResponse((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            rightAnswers: prev.rightAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 },
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setDisplayResult(true);
    }
  };

  const onSelectedAnswer = (answer, index) => {
    setSelectedAnswerIndex(index);
    setClick(click + 1);
    if (answer === rightAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const questionPosition = (number) => (number > 9 ? number : `0${number}`);

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mt-[20px] h-[500px] w-[700px] rounded-xl bg-gray-400 px-[60px] py-[30px] shadow-xl">
          {!displayResult ? (
            <div>
              <div>
                <span className="text-[28px] font-semibold text-gray-50">
                  {questionPosition(currentQuestion + 1)}
                </span>
                <span className="text-[18px] font-semibold text-gray-50">
                  /{questionPosition(questions.length)}
                </span>
              </div>
              <h1 className="text-center text-xl font-semibold">{question}</h1>
              <ul className="mt-6 text-center">
                {options.map((answer, index) => (
                  <li
                    onClick={() => onSelectedAnswer(answer, index)}
                    key={answer}
                    className={`mt-2 cursor-pointer rounded-md border-[1px] p-2 text-[16px] text-gray-50 ${
                      selectedAnswerIndex === index && selectedAnswer
                        ? "bg-green-600"
                        : selectedAnswerIndex === index && !selectedAnswer
                          ? "bg-red-500"
                          : null
                    } ${click >= 1 && "pointer-events-none cursor-not-allowed"}`}
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  onClick={onClickNext}
                  className="mt-6 cursor-pointer rounded-md bg-gray-700 px-16 py-[8px] font-semibold disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-white"
                  disabled={selectedAnswerIndex === null}
                >
                  {currentQuestion === questions.length - 1 ? "End" : "Next"}
                </button>
              </div>
            </div>
          ) : (
            <div>
              {response.wrongAnswers === 0 ? (
                <div className="flex flex-col items-center">
                  <span className="text-[60px]">🍾</span>
                  <h1 className="text-2xl font-semibold text-green-600">
                    Congratulations 👏
                  </h1>
                  <p>You have aced the quiz, you got them all points right!</p>
                  <button className="mt-10 cursor-pointer rounded-md bg-gray-700 px-16 py-[4px] hover:bg-gray-600">
                    <NavLink to="/" className="font-semibold">
                      Go back
                    </NavLink>
                  </button>
                </div>
              ) : (
                <div className="p-4">
                  <h3 className="text-[22px] text-gray-700">Results:</h3>
                  <p className="text-[18px] text-gray-700">
                    All Questions: <span>{questions.length}</span>
                  </p>
                  <p className="text-[18px] text-gray-700">
                    Score: <span>{response.score}</span>
                  </p>
                  <p className="text-[18px] text-gray-700">
                    All right Answers: <span>{response.rightAnswers}</span>
                  </p>
                  <button className="mt-2 cursor-pointer rounded-md bg-gray-700 px-16 py-[6px] hover:bg-gray-600">
                    <NavLink to="/" className="font-semibold">
                      Repeat
                    </NavLink>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
