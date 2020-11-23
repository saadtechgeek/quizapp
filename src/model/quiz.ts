import React from 'react';

export type Quiz = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: Array<string>;
    question: string;
    type: string;
}

export type QuestionType={
    question:string;
    answer:string;
    option:Array<string>;
    correct_answer: string;
}

export type TQuestion = {
    question:string;
    options: Array<string>;
    callback: (e:React.FormEvent<EventTarget>,ans:string)=>void;
}    