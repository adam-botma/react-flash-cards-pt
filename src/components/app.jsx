import React from 'react'
import CreateCard from './create-card'
import ReviewCards from './review-cards'
import ViewCards from './view-cards'
import Nav from './nav'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {view: 'view-cards'}
    this.setView = this.setView.bind(this)

  }

  setView(newView){
    this.setState({view: newView})
  }

  getView(){
    switch (this.state.view){
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return <h1>An Internal Error Occured... lo siento</h1>;
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
