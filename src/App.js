import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App  extends Component {
  // api_key = process.env.REACT_APP_API_KEY;
  api_key = "54ba028cba704322b8b743b1fa4c6f3d";
  state = {
    progress :0
  }

  setProgress=(progress)=>{
    this.setState({progress})  
  }
  render() {
    return (
    <>
    <BrowserRouter>
      
  
      <div className='container my-1'>
         <NavBar/>
         <LoadingBar
        color='#f11977'
        progress={this.state.progress}
        height={3}
        onLoaderFinished={() => this.setProgress(0)}
      />
      <News setProgress = {this.setProgress} apikey = {this.api_key}   key='general'  category="general" />
       
    <Routes>
    <Route exact path="/" element={<News setProgress = {this.setProgress} apikey = {this.api_key}   key='general'  category="general" />} />
    <Route exact path = "/sport" element = {<News setProgress = {this.setProgress} apikey = {this.api_key}   key='sport'  category = "sport"/>} />
    <Route exact path = "/health" element = {<News setProgress = {this.setProgress}  apikey = {this.api_key}  key='health' category = "health"/>} />
    <Route exact path = "/entertainment" element = {<News setProgress = {this.setProgress} apikey = {this.api_key}  key='entertainment'  category = "entertainment"/>} />
    <Route exact path = "/science" element = {<News setProgress = {this.setProgress} apikey = {this.api_key}   key='science' category = "science"/>} />
    <Route exact path = "/technology" element = {<News setProgress = {this.setProgress}  apikey = {this.api_key} key='technology'  category = "technology"/>} />
    
    </Routes> 

      </div>
      </BrowserRouter>
      </>
     

    
    )
  }
}



