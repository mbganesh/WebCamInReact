# WebCam in React JS

## App.js

Hit to open App.js file  [Here](https://github.com/mbganesh/WebCamInReact/blob/main/src/App.js).

### Code

```
// funcation

 const [image, setImage] = useState({
    image:
      "https://image.freepik.com/free-vector/cardboard-box-opened-isolated-cartoon-style_1308-49807.jpg",
    name: "",
  });
  const WebRef = useRef(null);
  const [openCapture, setopenCapture] = useState(false);
  const openPop = () => {
    setopenCapture(true);
  };
  const closeCapture = () => {
    setopenCapture(false);
  };

  const storeImage = () => {
    console.log(WebRef.current.getScreenshot());
    let picBase64 = WebRef.current.getScreenshot();

    setImage({ ...image, image: picBase64, name: "Sample_IMG" });

    setopenCapture(false);
  };



// return


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
        <Button variant="contained" onClick={openPop}>
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
            <DialogTitle>{"Choose Your Pattern"}</DialogTitle>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Webcam style={{ width: "100%", height: "35%" }} ref={WebRef} />
              <Button variant="contained" onClick={storeImage}>
                Capture
              </Button>
            </div>
          </Dialog>
        </div>
      </div>
    </div>


        
        
```

## Switch Camera

```


 const [facingMode, setFacingMode] = useState("user");
  const switchCam = () => {
    const newFcMode = facingMode === "user" ? { exact: "environment" } : "user";
    setFacingMode(newFcMode);
  };
  
<!--  Return  -->
  
   <div>
      <Webcam videoConstraints={{ facingMode: facingMode }} />
      <IconButton  onClick={() => switchCam()}> <CamIcon /> </IconButton>
    </div>
    
    
