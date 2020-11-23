import React, { useState } from 'react';
import { TQuestion } from './../model/quiz'
import { cpuUsage } from 'process';

const QuesitonCard: React.FunctionComponent<TQuestion> = ({ question, options,callback }) => {
    let [selectedAns, setSelectedAns] = useState("");
    
    const handleSelectionEvent = (ev:any) => {
     //console.log(ev.target.value);
     setSelectedAns(ev.target.value);
    }

    return (
        <div className="question-container">
            <div className="question"> {question} </div>
            <form className="question-form" onSubmit={(e:React.FormEvent<EventTarget>) =>callback(e,selectedAns)}>
                {
                    options.map((opt: string, ind: number) => {
                        return (<div key={ind}><label className="radio">
                            <input required 
                            checked={selectedAns==opt}
                            type='radio' 
                            name='opt' 
                            
                            value={opt} 
                            onChange={handleSelectionEvent}/> {opt}
                        </label></div>);
                    })

                }
                <input className="submit" type="submit" />
            </form>
        </div>
    )
}

export default QuesitonCard;