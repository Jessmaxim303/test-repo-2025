import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-Header">
	    <div className="Menu-main-container">
	  
	  	  <container className="Menu-container">Home</container>
	      <container className="Menu-container">Work</container>
	      <container className="Menu-container"> About</container>
	    </div>
	   </div>
	  <div className="App-Welcome">
	    <div className="App-Welcome-Subcontainer">
	  <img src="" /> 
	    </div>
	    <div className="App-Welcome-Subcontainer">
	      <h1>Jesse Maxim</h1>
	      <p>Software Developer<br/>
	      	 Graphic Designer<br/>
	      	 Based in Denver
	      </p>	
	    </div>
	  </div>
	  <div className="App-Body">Body</div>
	  <div className="App-Solution">Solution</div>
	  <div className="App-DataProof">Data Proof</div>
	  <div className="App-Data">Data</div>
	  
    </div>
  );
}

export default App;
