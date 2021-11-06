import "./Layout.css";
import Header from "../Header/Header";
import Details from "../Details/Details";
import Skills from "../Skills/Skills";

function Layout(): JSX.Element {
  return (
    <div id="main">
    <div >
      <div >
        <p>
          <Header />
        </p>
      </div>
     <div className="row">
      <div className="column side">
        <p>
          <Details />
        </p>
      </div>
      <div className="column side">
        <p>
          <Skills />
        </p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Layout;
