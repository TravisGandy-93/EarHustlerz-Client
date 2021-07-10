import React from 'react'

class TextBox extends React.Component {
    state = {
        counter: 0,
        characters: '',
    }

    handleChange (e) {
        console.log('handle change called for', e.target.value)
        this.setState({ characters: e.target.value })
      }
    
    render() {
        
        return (
            <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={() => this.setState({ counter: this.state.counter + this.state.characters.length })}>Count</button>
            <input type="text" class="form-control" placeholder="" onChange={(e) => this.handleChange(e)}></input>
            <p> you have submitted {this.state.counter} characters total </p>
            </div>
        )
    }

}

export default  TextBox