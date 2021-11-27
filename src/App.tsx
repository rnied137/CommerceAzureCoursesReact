// import { Sidebar } from './Components/Sidebar';
// import { BrowserRouter as Router} from "react-router-dom";
// import { useState } from 'react';
// import { TopBar } from './Components/TopBar/TopBar';
// import { RouterComponent } from './Components/RouterComponent';
// import { ChakraProvider } from "@chakra-ui/react"
// import { theme } from "./themes/ExtendChakra";
// import { useEffect} from 'react';
import { Forma } from './Components/Forma';
import Login from './Components/Forma/Login/Login';
import Register from './Components/Forma/Register/Register';
import { RegisterForm } from './Components/Forma/RegisterForm/RegisterForm';

function App() {

//   const [isActiveArray, setIsActiveArray] = useState(
//     [true, false, false, false]
//   )

//   const setActive = (i: number, state: boolean) => {
//     const array = [false, false, false, false];
//     array[i] = true;
//     const newArray = [...array];
//     setIsActiveArray(newArray)
//   }

// useEffect(() => {
//   //console.warn(theme)
// }, [])
  return (
    <>
    {/* <Register/> */}
    <RegisterForm/>
    {/* <Forma/> */}
    {/* <ChakraProvider theme={theme}>
    <div style={{ display: "flex" }}>
      <Router>
        <Sidebar isActiveArray={isActiveArray} setActive={setActive} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TopBar>
          </TopBar>
          <RouterComponent />
        </div>
      </Router>
    </div>
    </ChakraProvider> */}
</>
  );
}

export default App;
