import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
  constructor(props){
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      text: 'Roll Dice',
      disabled: '',
      shake: '',
      result:'All the best'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({
      disabled: 'disabled',
      text: 'Rolling',
      shake:'Dice-shake'
    });

    setTimeout(() => {
      let diceNums = [1 , 2, 3, 4, 5, 6];
      let randomNum1 = diceNums[Math.floor(Math.random() * 6)];
      let randomNum2 = diceNums[Math.floor(Math.random() * 6)];
      let result = ((randomNum1 == 6 && randomNum2 == 6) ? 'You won!!' : 'You lost!!');
      this.setState({
        num1: randomNum1,
        num2: randomNum2,
        text: 'Roll Dice',
        disabled: '',
        shake: '',
        result: result
      });
    }, 2000);

  }

  render(){
    return(
      <div className="Roll-Dice">
        <Dice num={this.state.num1} shake={this.state.shake}/>
        <Dice num={this.state.num2} shake={this.state.shake} />
        <button onClick={this.handleClick} disabled={this.state.disabled}>{this.state.text}</button>
        <h2>{this.state.result}</h2>
      </div>
    )
  }
}

export default RollDice;
