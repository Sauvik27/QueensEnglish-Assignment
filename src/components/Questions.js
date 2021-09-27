import React, {useState, useEffect} from 'react'
import Answer from './Answer';

function Questions() {
    const [ques, setQues] = useState([]);
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [result, setResult] = useState("")
    const [error, setError] = useState(null);


    const update = () => {
        fetch("https://jservice.io/api/random")
            .then(res => res.json())
            .then(
                (result) => {
                    setQues(result);
                },
                (error) => {
                    setError(error);
                }
            )
        setCount(prevCount => prevCount + 1)
    }
    
    const handleOnChange =  (event) => {
        setText(event.target.value);
    }
    useEffect(() => {
        update();
    },[])


    const check = () => {
        if(text === ques[0].answer){
            setResult("Correct")
        }
        else{
            setResult("Incorrect")
        }
        fetch("https://jservice.io/api/random")
            .then(res => res.json())
            .then(
                (result) => {
                    setQues(result);
                },
                (error) => {
                    setError(error);
                }
            )
        setCount(prevCount => prevCount + 1)
    }
    

    if(error){
        return <div>Error: {error.message}</div>
    } else{
        return (
            <div className="question-tab">
                <div className="card">
                    <div className="card-header">
                        Question {count}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        {ques.map(questi => (
                            <div key={questi.id}>
                                {questi.question}
                            </div>
                        ))}
                        </blockquote>
                        {console.log(ques)}
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Answer" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleOnChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={check}>Submit</button>
                    </div>
                </div>
                <Answer answer={result}/>
            </div>
        )
    }
}
export default Questions
