import React from 'react';
import QuestionCard from './question-card';

class ViewCards extends React.Component {
constructor(props){
  super(props)
  this.cardsArray = props.cardsArray
}


render() {
  const questionCards = this.cardsArray.map((question, index) => <QuestionCard key={index} question={question.question} answer={question.answer}/>,)
  return (
    <div>
    <div className="d-flex justify-content-center">
  <h1>My Cards</h1>
    </div>
    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
    {questionCards}
      </div>
  </div>
  )
}





}

export default ViewCards;
