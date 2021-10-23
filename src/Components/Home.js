import React, { useState } from "react";
import Webcam from "react-webcam";
import { useRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  imagePreview: {
    width: "20%",
    height: "20%",
    "&:hover": {
      transform: "scale(5.5)",
      // transition: theme.transitions.create('transform'),
      transition: "all 0.8s ease",
    },
  },
}));

function Home() {
  const classes = styles();
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
  async function storeImage() {
    let picBase64 = webcamRef.current.getScreenshot();
    console.log(picBase64);
    console.log("******************************************");

    const image = await process_image(picBase64);

    console.log(image);
    setImage({ ...image, image: image, name: "Sample_IMG" });
    setopenCapture(false);
  }
  async function reduce_image_file_size(
    base64Str,
    MAX_WIDTH = 450,
    MAX_HEIGHT = 450
  ) {
    let resized_base64 = await new Promise((resolve) => {
      let img = new Image();
      img.src = base64Str;
      img.onload = () => {
        let canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.7)); // this will return base64 image results after resize
      };
    });
    return resized_base64;
  }
  async function process_image(res, min_image_size = 50) {
    if (res) {
      const old_size = calc_image_size(res);
      if (old_size > min_image_size) {
        const resized = await reduce_image_file_size(res);
        const new_size = calc_image_size(resized);
        console.log("new_size=> ", new_size, "KB");
        console.log("old_size=> ", old_size, "KB");
        return resized;
      } else {
        console.log("image already small enough");
        return res;
      }
    } else {
      console.log("return err");
      return null;
    }
  }
  function calc_image_size(image) {
    let y = 1;
    if (image.endsWith("==")) {
      y = 2;
    }
    const x_size = image.length * (3 / 4) - y;
    return Math.round(x_size / 1024);
  }

  // Testing Purpose

  var oldData = [{ a: "name1", b: "name2", c: "name3" }];

  var tempData = { a: "1name", b: "2name" };


  



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
        <Button variant="contained" onClick={openPop}>
          Capture
        </Button>
        <img className={classes.imagePreview} src={image.image} />
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
              <Webcam
                style={{ width: "100%", height: "35%" }}
                screenshotFormat="image/png"
                ref={webcamRef}
              />
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

export default Home;
