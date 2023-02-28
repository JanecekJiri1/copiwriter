import BasicSlader from "./component/BasicSlader";
import PhoneVersion from "./component/PhoneVersion";

function App() {
  return (
    <div className="App">
      <span className="fullScreanV">
        <BasicSlader />
      </span>
      <span className="mobileScreenV">
        <PhoneVersion />
      </span>
    </div>
  );
}

export default App;
