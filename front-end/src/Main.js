import React, { Component } from 'react';
import axios from 'axios';
export default class Main extends Component{
  submitUrl = (e) =>{
    e.preventDefault();
    
    let config = {
      method: 'POST',
      url: 'http://localhost:8080/shortUrl',
      data: {
        original: e.target.url.value, 
      }
    }

    axios(config)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  createShortUrl() {
    var shortUrl = '';
    var char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < 4; i++){
      shortUrl += char[Math.floor(Math.random()*62)]
    }
    return shortUrl;
  }


  render(){

    return(
      <>
        <form onSubmit={this.submitUrl}>
          <label>Enter Url:
            <input type='text' name='url'></input>
          </label>
          <button type='submit'>Submit</button>
        </form>
      </>
    )
  }
}