import './App.css';
import './Login.js';

function App() {
  return (
    <div className="App">
      <body>
<ul class="topnav">
  <li><a href="Home.html">Home</a></li>
  <li><a href="Check Out Page.html">Check Out</a></li>
  <li><a href="Check In Page.html">Check In</a></li>
  <li class="right" ><a href="Login.html">Login</a></li>
</ul>
<h1>Wren Booking System</h1>
<br></br>
<p>
  Please select the device needed from the drop down list below:
</p>
<label for="Devices">Choose your device:</label>
<select name="Devices" id="Devices">
  <option value="iPhone">iPhone</option>
  <option value="Laptop 1">Laptop 1</option>
</select>
</body>
</div>
  );
}

export default App;
