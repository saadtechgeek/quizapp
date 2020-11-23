import {Quiz,QuestionType} from './../model/quiz';
const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizDetails = async(totalQuestions:number,level:string):Promise<Array<QuestionType>> =>{
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
       //destructuring 
    let {results} = await res.json();
    const quiz = results.map((questionObj:Quiz, ind:number)=>{
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
            correct_answer: questionObj.correct_answer
        }
    });
    return quiz;

    // let {results} = await res.json();
    // return results;
}