import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import { useState } from "react";
import questions from "../questions";

export default function Question(
    {
        index,
        onSelectAnswer,
        onSkipAnswer
    }) {



    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(selectedAnswer) {
        setAnswer({
            selectedAnswer: selectedAnswer,
            isCorrect: null
        })



        setTimeout(() => {
            setAnswer({
                selectedAnswer: selectedAnswer,
                isCorrect: questions[index].answers[0] === selectedAnswer
            })

            setTimeout(() => {
                onSelectAnswer(selectedAnswer);
            }, 1500)
        }, 500)
    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect === null) {
        answerState = 'answered';
    }

    if (answer.isCorrect === true) {
        answerState = 'correct';
    }

    if (answer.isCorrect === false) {
        answerState = 'wrong';
    }


    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
                mode={answerState}
            />

            <h2>{questions[index].text}</h2>
            <Answer
                answers={questions[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}