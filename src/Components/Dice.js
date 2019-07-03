import React, {Component} from 'react';
import converter from 'number-to-words';

class Dice extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className='Dice'>
        <i className={'fas fa-dice-'+ converter.toWords(this.props.num) +' fa-7x ' + this.props.shake } />
      </div>
    )
  }
}

export default Dice;
