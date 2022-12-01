import Sidebar from "Components/Sidebar";
import Content from "Components/Content";
import BottomBar from "Components/BottomBar";


function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </>
  );
}

export default App;
