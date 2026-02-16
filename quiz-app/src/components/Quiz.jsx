import { useState, useCallback } from "react"
import questions from "../questions";
import Summary from "./Summary";
import Question from "./Question";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {

        setUserAnswers(prev => {
            return [...prev, selectedAnswer];
        })

    }, [])

    const handleSkipAnswer = useCallback(() =>
        handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}