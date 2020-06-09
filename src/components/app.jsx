import React from 'react'
import CreateCard from './create-card'
import ReviewCards from './review-cards'
import ViewCards from './view-cards'
import Nav from './nav'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: 'view-cards',
      cards: []
    }
    this.setView = this.setView.bind(this)
    this.addCard = this.addCard.bind(this)

  }

  setView(newView){
    this.setState({view: newView})
  }



  saveCards (){
    localStorage.setItem('flash-cards',JSON.stringify(this.state.cards))
  }

  addCard(card){
    console.log('got it going')
    const currentDeck = this.state.cards.slice();
    currentDeck.push(card);
    this.setState({cards : currentDeck}, this.saveCards)
  }
  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCard={this.addCard} setView ={this.setView} />
      case 'review-cards':
        return <ReviewCards />
      case 'view-cards':
        return <ViewCards />
      default:
        return <h1>An Internal Error Occured... lo siento</h1>
    }
  }

  render() {

    return (
      <div>
        <Nav setView={this.setView} />
        {this.getView()}
      </div>
    );
  }

}

export default App
