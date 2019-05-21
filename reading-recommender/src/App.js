
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login";
import QuizQuestionsView from "./views/QuizQuestionsView";
import Questions from "./components/Questions";
import styled, {css} from 'styled-components'

const NavigationStyle = styled.div`
  
  background-color: #222;
  border: 1px solid black;
  color: #fff
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  ${props =>
    props.secondary &&
    css`
      background-color: #76323F;
      color: white;
      text-decoration: none;
    `};
`
const AppStyle = styled.div`
  
  background-color: #eee;
  height: 100%;
`
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px;
`
const NavLinkStyle = styled(Link)`
  text-decoration: none;
`

function App() {
  return (
    <Router>
      <AppStyle className="App">
        <NavigationStyle>
          <NavLinkStyle>
            <LinkStyle to="/login">Login</LinkStyle>
          </NavLinkStyle>
          <NavLinkStyle>
            <LinkStyle to="/questions">Continue as Guest</LinkStyle>
          </NavLinkStyle>
          <NavLinkStyle>
            {/* <Link to="/protected">Protected Page</Link> */}
          </NavLinkStyle>
        </NavigationStyle>
        <Route path="/login" component={Login} />
        <Route path="/questions" component={QuizQuestionsView} />
        <PrivateRoute exact path="/protected" component={QuizQuestionsView} />
      </AppStyle>
    </Router>
  );
}

export default App;