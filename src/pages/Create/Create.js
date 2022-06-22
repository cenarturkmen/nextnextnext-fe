import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, TextField, InputAdornment } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import "./Create.css";
import Navbar from "../../components/Navbar/Navbar";
import DropZone from "../../components/DropZone/DropZone";

const Create = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  function handleInputChange(event) {
    let { name, value } = event.target;
    console.log("hello");
    setFormData({ ...formData, [name]: value });
  }

  const createNFT = () => {
    console.log("create nft");
  };

  return (
    <>
      <Navbar />
      <div className="create">
        <div className="createBody">
          <div className="heading">
            <Typography variant="h3">Create NFT</Typography>
            <Typography variant="h6"> Upload your nft and sell it</Typography>

          </div>
          <Divider />
          <div className="content">
            <div className="uploadImage">
              <DropZone className="dropzone" onFileUploaded={setSelectedFile} />
            </div>
            <div className="closeIcon">
              <Link to="/">
                <CancelOutlinedIcon fontSize="large" />
              </Link>
            </div>
            <form onSubmit={createNFT}>
              <fieldset>
                <TextField
                  label="Title"
                  name="title"
                  variant="filled"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  fullWidth
                />
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  label="Description"
                  name="description"
                  variant="filled"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  fullWidth
                />
                <TextField
                  label="price"
                  name="price"
                  variant="filled"
                  value={formData.price}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">ETH</InputAdornment>
                    ),
                  }}
                  fullWidth
                />
                <Button
                  id="submitButton"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
