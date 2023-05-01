import { useState } from "react";
import MainContent from "./Components/MainContent/MainContent";
import Sidebar from "./Components/Sidebar/Sidebar";
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

function App() {

  const [show, setshow] = useState(false);

  const handle = useFullScreenHandle();

  console.log(handle, 'sssss');
  const handleSide = () => {
    setshow(!show)
  }

  return (
    <>
      <FullScreen className="bg-white" handle={handle}>
        <div className="d-flex">
          <Sidebar show={show} />
          <MainContent handleSide={handleSide} handle={handle} />
        </div>
      </FullScreen>
    </>
  );
}

export default App;
