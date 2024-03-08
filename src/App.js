import './App.css';
import SendIcon from '@mui/icons-material/Send';
import QuestionComponent from './Question/Question';
import Answer from './Answer/Answer';
import Thanks from './Thanks/Thanks';
import Option from './Option/Option';
import { CircularProgress } from '@mui/material';
import { useState } from 'react'; // Import useState hook

function App() {
  const [answers, setAnswers] = useState([]); // State for storing answers
  const [inputN, setInputN] = useState(''); // State for input value
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // State for current question index
  const [chat, setChat] = useState([]); // State for chat history

  const handleSend = () => {
    const newChatEntry = {
      question: questions[currentQuestionIndex],
      answer: inputN
    };
    setChat(prevChat => [...prevChat, newChatEntry]); // Update chat history with the new entry
    setAnswers(prevAnswers => [...prevAnswers, inputN]); // Append inputN to answers array
    setInputN(''); // Clear inputN after sending
    setCurrentQuestionIndex(prevIndex => prevIndex + 1); // Move to the next question
  };

  const handleOptionSelection = (option) => {
    const newChatEntry = {
      question: questions[currentQuestionIndex],
      answer: option
    };
    setChat(prevChat => [...prevChat, newChatEntry]); // Update chat history with the new entry
    setAnswers(prevAnswers => [...prevAnswers, option]); // Append inputN to answers array
    setInputN(''); // Clear inputN after sending
    setCurrentQuestionIndex(prevIndex => prevIndex + 1); // Move to the next question
  };

  const questions = [
    "What's your name ?",
    "How old are you ?",
    "Are you educated ?",
    "Have you passed 10th grade ?",
    "What's your 10th score in % ?",
    "Have you passed 12th grade ?",
    "What's your 12th score in % ?",
    "Have you done any graduation ?",
    "Enter graduation course name :"
  ];

  const allQuestionsAnswered = currentQuestionIndex === questions.length;

  return (
    <div>
      <div style={{ height: '94vh', borderRadius: '2em', overflowX: 'scroll', left: '34.7vw', position: 'absolute', width: '30vw', background: '#FFFDD0' }}>
        {chat.map((entry, index) => (
          <div key={index}>
            <QuestionComponent message={entry.question} />
            <Answer message={entry.answer} />
          </div>
        ))}
        {currentQuestionIndex < questions.length && (
          <div>
            <QuestionComponent message={questions[currentQuestionIndex]} />
            {(currentQuestionIndex === 2 || currentQuestionIndex === 3 || currentQuestionIndex === 5 || currentQuestionIndex === 7) && (
              <Option onYes={() => handleOptionSelection('Yes')} onNo={() => handleOptionSelection('No')} />
            )}
          </div>
        )}
        {allQuestionsAnswered && (
          <div>
            <Thanks />
          </div>
        )}
      </div>
      <div style={{ display: 'flex', bottom: '0px', justifyContent: 'center' }}>
        <div style={{ display: 'flex', width: '30vw', gap: '0.6vw', position: 'absolute', bottom: '0px' }}>
          <input className="inputbox" value={inputN} onChange={(e) => setInputN(e.target.value)} />
          <button onClick={handleSend}><SendIcon style={{ width: '50px', height: 'auto' }} /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
