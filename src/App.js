import './App.css';

import React from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import ScrollToTop from "react-scroll-to-top";

import {

  Switch,
  Route
} from "react-router-dom";


const App = () => {

  const [progress, setProgress] = useState(0)

  const [mode, setMode] = useState('light')

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';




    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'White';

    }

  }




  return (

    <div className="container">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}

      />
      <ScrollToTop smooth color="#6f00ff" />



      <Switch>
        <Route exact path="/">
          <News mode={mode} setProgress={setProgress} key="general" pageSize={4} country="in" category='general' />
        </Route>

        <Route exact path="/business">
          <News mode={mode} setProgress={setProgress} key="business" pageSize={4} country="in" category='business' />
        </Route>

        <Route exact path="/entertainment">
          <News mode={mode} setProgress={setProgress} key="entertainment" pageSize={4} country="in" category='entertainment' />
        </Route>

        <Route exact path="/health">
          <News mode={mode} setProgress={setProgress} key="health" pageSize={4} country="in" category='health' />
        </Route>

        <Route exact path="/science">
          <News mode={mode} setProgress={setProgress} key="science" pageSize={4} country="in" category='science' />
        </Route>

        <Route exact path="/sports">
          <News mode={mode} setProgress={setProgress} key="sports" pageSize={4} country="in" category='sports' />
        </Route>



      </Switch>


    </div>



  )


}


export default App;

