import React, { PureComponent } from 'react'

const Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class Keyboard extends PureComponent {
  handleBtnClick(letter) {
    this.props.guessLetter(letter);
  }
  render() {
    return (
      <div>
        {Alphabet.map(elem =>
          <button type="button"
                  label={elem}
                  key={elem}
                  onClick={(letter) => this.handleBtnClick(elem)}>
                  {elem}
          </button>
        )}
      </div>
    );
  }
}

export default Keyboard
