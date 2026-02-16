import logoImage from '../assets/quiz-logo.png'

export default function Header() {
    return (
        <>
            <header>
                <img src={logoImage} alt="logo of quiz app" />
                <h1>ReactQuiz</h1>
            </header>
        </>
    )
}