import './App.css';
import NavBarComponent from './Component/NavBarComponent'
import News from './Component/News'
import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App =(props)=>{
  

  const[progress,setProgress]=useState(0);
  const apikey='20e9faee1b0f499981c1f16531fa61a8';
  
    return (
      <div>
        <Router>
  <NavBarComponent/>
  <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
  <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" country={props.country} pageSize={props.pageSize} category={props.category} />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" country={props.country} pageSize={props.pageSize} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" country={props.country} pageSize={props.pageSize} category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" country={props.country} pageSize={props.pageSize} category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" country={props.country} pageSize={props.pageSize} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" country={props.country} pageSize={props.pageSize} category="sports" />} />
            
  </Routes>
</Router>
      </div>
    )
  }
App.defaultProps={
  country:'in',
  pageSize:8,
  category:'general'
}
App.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default App;
