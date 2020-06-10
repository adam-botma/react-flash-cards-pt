import React from 'react'

class QuestionCard extends React.Component{
  constructor(props){
    super(props)
    this.question = props.question
    this.answer = props.answer
  }

render(){
  return (
<div className='col card-container'>
  <div className='card'>
  <div className='card-header text-white bg-dark'>Q: {this.question}</div>
    <div className="card-body text-dark bg-white">
      <p className="card-text">A: {this.answer}</p>
    </div>
  </div>
</div>
  )
}
}

export default QuestionCard
