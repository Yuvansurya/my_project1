import React, {useContext} from "react"; 
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

function EndScreen() { 
    const {score, setGameState,setScore} = useContext(QuizContext); 
    const retest = () => { 
        setScore(0);
        setGameState("menu"); 
    }
    return (
    <div className="EndScreen">
        <h1>Quiz Finished</h1> 
        <h3>{score} / {Questions.length}</h3>
        <button onClick={retest}> Restart </button>
    </div>
    );
}

export default EndScreen;