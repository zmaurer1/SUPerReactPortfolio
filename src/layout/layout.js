import React from "react";
import Aux from "../hoc/aux";
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from "../components/home/home";
import Navbar from "../components/navbar/navbar";
import Portfolio from "../components/portfolio/portfolio"
import Contactme from "../components/contactme/contactme";
import Resume from "../components/resume/resume";


export default class Layout extends React.Component {
    render(){
        return (
            <Aux>
                <Navbar/>
                <div style={{paddingTop:"70px"}}>
                <Switch>
                <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/home" />}
                        />
                   <Route path="/home" exact component={Home}/>
                   <Route path="/portfolio" exact component={Portfolio}/>
                   <Route path="/resume" exact component={Resume}/>
                   <Route path="/contactme" exact component={Contactme}/>

                </Switch>
                </div>
            </Aux>
        )
    }
}