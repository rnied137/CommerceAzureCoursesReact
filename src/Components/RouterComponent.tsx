import styled from 'styled-components';
import { Switch, Route } from "react-router-dom";
import { ComponentPlaceholder } from '../ComponentPlaceholder';

const RouterBody = styled.div`
background:#DFE1EB;
height: calc(100vh - 100px);
width: calc(100vw - 100px);
`

export const RouterComponent = () => {
    return (
        <RouterBody>
            <Switch>
                <Route exact path="/dupa" render={(props) => <ComponentPlaceholder {...props} placeholder='tu jest ala' />} />
                <Route exact path="/ala" render={(props) => <ComponentPlaceholder {...props} placeholder={`ala ma kota`} />} />
                <Route exact path="/kot" render={(props) => <ComponentPlaceholder {...props} placeholder={`kot ma ale`} />} />
                <Route exact path='/dupa2' render={(props) => <ComponentPlaceholder {...props} placeholder={`a tutaj kot`} />} />
            </Switch>
        </RouterBody>
    )
}
