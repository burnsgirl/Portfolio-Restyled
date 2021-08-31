import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App () {
    return (
        <Router>
            <div>
                <NavTabs />
                <Route exact path="/" component={Home} />
                
            </div>
        </Router>
    )
}

export default App;