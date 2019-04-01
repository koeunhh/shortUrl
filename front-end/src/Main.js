import React, { Component } from 'react';

export default class Main extends Component{
  render(){
    return(
      <>
        <form>
          <label>Enter Url:
            <input type='text' name='url'></input>
          </label>
          <input type='submit'></input>
        </form>
      </>
    )
  }
}