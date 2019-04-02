import React, { Component } from 'react';
import axios from 'axios';
export default class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      originalUrl: '',
      shortUrl: ''
    }
  }

  submitUrl = (e) =>{
    e.preventDefault();
    const targetUrl = e.target.url.value;
    if(targetUrl.startsWith('https://app.yuhu.io/book_showing?property_id=')){
      var array = targetUrl.split("=");
      const id = array[1];
      axios.get(`http://localhost:8080/book_showing/${id}`)
        .then(res => {
          console.log(res.data[0].short);
          this.setState({
            originalUrl: res.data[0].original,            
            shortUrl: res.data[0].short
          })
        })
        .catch(err => {
          const shortUrl = this.createShortUrl();
          console.log(shortUrl);
          this.setState({
            originalUrl: targetUrl,
            shortUrl: `book.yuhu.io/${shortUrl}`
          });
          let config = {
            method: 'POST',
            url: 'http://localhost:8080/book_showing',
            data: {
              original: targetUrl, 
              short: shortUrl
            }
          }
      
          axios(config)
            .then(res => {
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            })
        })
    }
    else{
      console.log('not a valid url');
    }
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
        <h3>New Url:</h3>
        <a href={this.state.originalUrl}>{this.state.shortUrl}</a>
      </>
    )
  }
}