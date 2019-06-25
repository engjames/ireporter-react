import React from "react";
import ReactDOM from "react-dom";
import "./style/main.less";

class Welcome extends React.Component {
    render () {
        return (
    <>
      <h1 className="header">IReporter</h1>
      <p>This app. enables any citizen to bring any form of corruption
          to the notice of appropriate authorities and the general public.
      </p>
      <p>Visit ireporter at <a href="https://ireporterui.herokuapp.com/">IReporter</a></p>
    </>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
