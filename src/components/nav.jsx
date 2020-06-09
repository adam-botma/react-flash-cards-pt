import React from 'react'

class Nav extends React.Component{
  constructor(props){
    super(props)
    this.setView = props.setView;
  }



  render(){
    return (
      <ul className="nav nav-pills justify-content-end">
        <li className="nav-item">
          <a  className="nav-link" onClick={() => this.setView('view-cards')}>View Cards</a>
        </li>
        <li className="nav-item">
          <a  id='review' className="nav-link" onClick={() => this.setView('review-cards')}>Review</a>
        </li>
        <li className="nav-item">
          <a id='create' className="nav-link" onClick={()=> this.setView('create-card')}>Create Card</a>
        </li>
      </ul>

    )
  }
}

export default Nav
