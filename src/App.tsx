import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/quiz_service';
import { QuestionType, Quiz } from './model/quiz';
import QuesitonCard from './components/questionCard';


function App() {
  let [quiz, setQuiz] = useState<Array<QuestionType>>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [currentScore, setCurrentScore] = useState(0);
  let [showResult, setShowResult] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const questions: Array<QuestionType> = await getQuizDetails(5, 'easy');
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>,userAns:string) => {
    e.preventDefault();   // to avoid flicking on screen this is done.
    const currentQuestion = quiz[currentStep];
     console.log("correct Ans:" + currentQuestion.correct_answer+ "   userSelection:"+ userAns)
    if (userAns === currentQuestion.correct_answer){
      setCurrentScore(currentScore++);
    }

    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep);
    } else {
     // alert('Your final score is: '+currentScore + ' out of '+quiz.length);
      setShowResult(true);
    }
  }

  if (!quiz.length)
    return <h3>Loading..</h3>
  if(showResult)
    return (<div className="question-container result-container">
        <h2>Result</h2>
        <p className="result-text">Your final score is: <b>{currentScore}</b> out of <b>{quiz.length}</b></p>
    </div>);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuesitonCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
