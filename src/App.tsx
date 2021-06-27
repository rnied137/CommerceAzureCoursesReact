import { Sidebar } from './Components/Sidebar';
import { ComponentPlaceholder } from './ComponentPlaceholder';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [isActiveArray, setIsActiveArray] = useState(
    [true, false, false, false]
  )

  const setActive = (i, state) => {
    const element = isActiveArray[i];
    setIsActiveArray([...isActiveArray, [i]: element])
  }


  return (
    <div>
      <Router>
        <Sidebar isActiveArray={isActiveArray} />

        <Switch>
          <Route exact path="/dupa" render={(props) => <ComponentPlaceholder {...props} placeholder={`tu jest ala`} />} />
          <Route exact path="/ala" render={(props) => <ComponentPlaceholder {...props} placeholder={`ala ma kota`} />} />
          <Route exact path="/kot" render={(props) => <ComponentPlaceholder {...props} placeholder={`kot ma ale`} />} />
          <Route exact path="/dupa" render={(props) => <ComponentPlaceholder {...props} placeholder={`a tutaj kot`} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
