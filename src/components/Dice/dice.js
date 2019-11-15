import React from 'react';
import './dice.css'


const Die = (props) => {
    return(
        <button value = {props.value} onClick = {props.update}>
            D{props.value}
        </button>
    )
}

const NumofDice = (props) => {
    return(
        <input type = 'number' pattern = '[0-9]*' min="1" max="10" placeholder = '1' onChange = {props.update} />
    )
}

const Result = (props) => {
    return(
        <p>{props.result}</p>
    )
}

export default class Dice extends React.Component {
    constructor() {
        super();
        this.state = {
            numofDice: 1,
            result: 0,
            dice: [4, 6, 8, 10, 12, 20, 100]
        }
        this.changenumofDice = this.changenumofDice.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
    }

    renderResult() {
        return (
          <Result result={this.state.result} />
        )
      }

      renderNumofDice() {
        return (
          <NumofDice value={this.state.numofDice} update={this.changenumofDice} />
        )
      }

      renderDice() {
        let toRender = [];
        let dice = this.state.dice;
        for (var i = 0; i < dice.length; i++) {
          toRender.push(
            <Die value={dice[i]} update={this.calculateTotal} />
          )
        }
        return toRender;
      }
      
      calculateTotal(e) {
        let numofDice = this.state.numofDice;
        let value = e.target.value;
        let result = 0;
        let random = () => {
          return Math.floor(Math.random() * value) + 1;
        }
        for (var i = 0; i < numofDice; i++) {
          result += random();
        }
        this.setState({
          result: result,
        })
      }

      changenumofDice(e) {
        this.setState({
          numofDice: e.target.value
        })
      }

    render(){
        let title = this.props.title;

        return (
            <div className="App">
                <h2>{title}</h2>
                <div>
                    {this.renderNumofDice()}
                </div>
                <div>
                    {this.renderDice()}
                </div>
                <div>
                    {this.renderResult()}
                </div>
            </div>
        );

    }
}
