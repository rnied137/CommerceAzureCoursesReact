import styled from 'styled-components';
import { Switch, Route } from "react-router-dom";
import { Settings } from '../AdminArea/Settings';
import { Dashboard } from './Pages/Dashboard';
import { Communication } from './Pages/Communication';
import { Widgets } from './Pages/Widgets';

const RouterBody = styled.div`
background:#DFE1EB;
height: calc(100vh - 100px);
width: calc(100vw - 100px);
padding: 4rem;
`

export const RouterComponent = () => {
    return (
        <RouterBody>
            <Switch>
                <Route exact path="/" component={Widgets} />
                <Route exact path="/communication" component={Communication} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path='/settings' component={Settings} />
            </Switch>
        </RouterBody>
    )
}
