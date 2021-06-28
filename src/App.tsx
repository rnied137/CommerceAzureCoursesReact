import { Sidebar } from './Components/Sidebar';
import { ComponentPlaceholder } from './ComponentPlaceholder';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [isActiveArray, setIsActiveArray] = useState(
    [true, false, false, false]
  )

  const setActive = (i: number, state: boolean) => {
    const array = [false, false, false, false];
    array[i] = true;
    const newArray = [...array];
    setIsActiveArray(newArray)
  }


  return (
    <div>
      <Router>
        <div style={{ display: "flex" }}>


          <Sidebar isActiveArray={isActiveArray} setActive={setActive} />

          <Switch>
            <Route exact path="/dupa" render={(props) => <ComponentPlaceholder {...props} placeholder='tu jest ala' />} />
            <Route exact path="/ala" render={(props) => <ComponentPlaceholder {...props} placeholder={`ala ma kota`} />} />
            <Route exact path="/kot" render={(props) => <ComponentPlaceholder {...props} placeholder={`kot ma ale`} />} />
            <Route exact path='/dupa2' render={(props) => <ComponentPlaceholder {...props} placeholder={`a tutaj kot`} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
