import React from "react";
import UserSignupPage from "../pages/UserSignupPage";
import LanguageSelector from "../components/LanguageSelector";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {Route,Redirect,Switch,HashRouter as Router} from "react-router-dom";
import TopBar from "../components/TopBar";
import {useSelector} from "react-redux";

const App = () =>
{
    const {isLoggedIn} = useSelector((store) => ({
        isLoggedIn: store.isLoggedIn
    }));

    return (
        <div>
            <Router>
                <TopBar></TopBar>
                <Switch>
                    <Route exact path={"/"} component={HomePage}></Route>
                    {!isLoggedIn && <Route
                        path={"/login"}
                        component={LoginPage}
                    />}
                    <Route path={"/signup"} component={UserSignupPage}></Route>
                    <Route
                        path={"/user/:username"}
                        component={UserPage}>
                    </Route>
                    <Redirect to={"/"}></Redirect>
                </Switch>
            </Router>
            <LanguageSelector></LanguageSelector>
        </div>
    );
}

export default App;
