import React from 'react'

class CreateCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      question: 'type a question here',
      answer: 'insert the answer here...'
    }
    this.addCard = props.addCard
    this.questionState = this.questionState.bind(this)
    this.answerState = this.answerState.bind(this)
    this.makeCard = this.makeCard.bind(this)
    this.setView = props.setView
    this.resetView = this.resetView.bind(this)
  }

  makeCard(){
    event.preventDefault();
    this.addCard(this.state)
    this.setState({question: 'type a question here', answer: 'insert the answer here'})
    this.resetView();
  }

  questionState(event){
    this.setState({question: event.target.value})
  }
  answerState(event) {
    this.setState({ answer: event.target.value })
  }

  resetView(){
    this.setView('view-cards')
  }

  render(){
    return (
      <div className='d-flex align-items-center flex-column'>
      <h1 className="text-center">Create New Card</h1>
        <form onSubmit={this.makeCard}>
        <div className='d-flex flex-column'>
          <label htmlFor="question">Question:</label>
          <textarea id="question" name='question' rows='3' value={this.state.question} onChange={this.questionState}/>
        </div>
          <div className='d-flex flex-column'>
          <label htmlFor="answer">Answer:</label>
          <textarea id="answer" name='answer' rows='3' value={this.state.answer} onChange={this.answerState} />
        </div>
        <div className="form-buttons d-flex justify-content-end">
            <button className="btn btn-outline-danger" onClick={this.resetView}>Cancel</button>
            <button type='submit' className="btn btn-outline-primary">Save Card</button>
        </div>
      </form>

      </div>

    )
  }
}

export default CreateCard
