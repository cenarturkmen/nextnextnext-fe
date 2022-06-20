import {useState} from 'react';
import {Link} from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Input, TextField, InputAdornment} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import './Create.scss';
import Navbar from '../../components/Navbar/Navbar';
import DropZone from '../../components/DropZone/DropZone';

const Create = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  function handleInputChange(event) {
    let {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }

  const createNFT = () => {
    console.log('create nft');
  };

  return (
    <>
      <Navbar />
      <div className="create">
        <div className="body">
          <div className="body-right">
            <div className="heading">
              <Typography variant="h3">Create NFT</Typography>
              <Typography variant="h6"> Upload your nft and sell it</Typography>
            </div>
            <div className="uploadImage">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <div>
                <form onSubmit={createNFT}>
                  <div>
                    <Link to="/">
                      <CancelOutlinedIcon fontSize="large" />
                    </Link>
                  </div>
                  <div>
                    <div>
                      <DropZone onFileUploaded={setSelectedFile} />
                    </div>
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
                            <InputAdornment position="start">
                              ETH
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                      <Button variant="contained" color="primary" type="submit">
                        Submit
                      </Button>
                    </fieldset>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
