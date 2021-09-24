import React, { useState } from "react";
import Webcam from "react-webcam";
import { useRef } from "react";
import { DialogTitle, Dialog, Button, TextField } from "@material-ui/core";
function App() {
  const [image, setImage] = useState({
    image:
      "https://image.freepik.com/free-vector/cardboard-box-opened-isolated-cartoon-style_1308-49807.jpg",
    name: "",
  });
  const webcamRef = useRef(null);

  const [openCapture, setopenCapture] = useState(false);
  const openPop = () => {
    setopenCapture(true);
  };
  const closeCapture = () => {
    setopenCapture(false);
  };

  const storeImage = () => {
    console.log(webcamRef.current.getScreenshot());
    let picBase64 = webcamRef.current.getScreenshot();
    setImage({ ...image, image: picBase64, name: "Sample_IMG" });
    setopenCapture(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          padding: "1%",
          width: "30%",
          border: "2px solid red",
          justifyContent: "space-evenly",
        }}
      >
        <TextField label="Capture" value={image.name} />
        <Button variant="contained" onClick={openPop} >
          Capture
        </Button>
        <img style={{ width: "20%", height: "20%" }} src={image.image} />
      </div>

      <div style={{ margin: "1%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            border: "2px solid white",
          }}
        >
          <Dialog open={openCapture} onClose={closeCapture}>
            <DialogTitle>{"Capure Sample Image"}</DialogTitle>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Webcam style={{ width: "100%", height: "35%" }}  screenshotFormat="image/png" ref={webcamRef} />
              <Button variant="contained" onClick={storeImage}>
                Capture
              </Button>
            </div>
          </Dialog>
        </div>
      </div>
      

    </div>
  );
}

export default App;


/**
 * Chrome, starting from version 47 implements this security policy , So you can't access Microphone or Camera without a secure connection.
 */