import { useState, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, TextField, InputAdornment } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import getWeb3 from "../../utils/getWeb3";
import "./Create.css";
import Navbar from "../../components/Navbar/Navbar";
import DropZone from "../../components/DropZone/DropZone";
import { api } from "../../services/api";
import ArtMarketplace from "../../contracts/ArtMarketplace.json";
import ArtToken from "../../contracts/ArtToken.json";

import {
  setNft,
  setAccount,
  setTokenContract,
  setMarketContract,
} from "../../redux/actions/nftActions";

const Create = () => {
  const nft = useSelector((state) => state.allNft.nft);
  const dispatch = useDispatch();

  useEffect(() => {
    let itemsList = [];
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();

        if (typeof accounts === undefined) {
          alert("Please login with Metamask!");
          console.log("login to metamask");
        }

        const networkId = await web3.eth.net.getId();
        try {
          console.log(ArtToken)
          const artTokenContract = new web3.eth.Contract(
            ArtToken.abi,
            ArtToken.networks[networkId].address
          );
          // console.log("Contract: ", artTokenContract);
          const marketplaceContract = new web3.eth.Contract(
            ArtMarketplace.abi,
            ArtMarketplace.networks[networkId].address
          );
          const totalSupply = await artTokenContract.methods
            .totalSupply()
            .call();
          const totalItemsForSale = await marketplaceContract.methods
            .totalItemsForSale()
            .call();

          for (var tokenId = 1; tokenId <= totalSupply; tokenId++) {
            let item = await artTokenContract.methods.Items(tokenId).call();
            let owner = await artTokenContract.methods.ownerOf(tokenId).call();

            const response = await api
              .get(`/tokens/${tokenId}`)
              .catch((err) => {
                console.log("Err: ", err);
              });
            console.log("response: ", response);

            if(!response.data)
            continue;

            itemsList.push({
              name: response.data.name,
              description: response.data.description,
              image: response.data.image,
              tokenId: item.id,
              creator: item.creator,
              owner: owner,
              uri: item.uri,
              isForSale: false,
              saleId: null,
              price: response.data.price,
              isSold: null,
            });
          }
          if (totalItemsForSale > 0) {
            for (var saleId = 0; saleId < totalItemsForSale; saleId++) {
              let item = await marketplaceContract.methods
                .itemsForSale(saleId)
                .call();
              let active = await marketplaceContract.methods
                .activeItems(item.tokenId)
                .call();

              let itemListIndex = itemsList.findIndex(
                (i) => i.tokenId === item.tokenId
              );

              itemsList[itemListIndex] = {
                ...itemsList[itemListIndex],
                isForSale: active,
                saleId: item.id,
                price: item.price,
                isSold: item.isSold,
              };
            }
          }

          dispatch(setAccount(accounts[0]));
          dispatch(setTokenContract(artTokenContract));
          dispatch(setMarketContract(marketplaceContract));
          dispatch(setNft(itemsList));
        } catch (error) {
          console.error("Errorrrrrr", error);
          alert(
            "Contracts not deployed to the current network " +
              networkId.toString()
          );
        }
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.` +
            error
        );
        console.error(error);
      }
    };
    init();
  }, [dispatch]);


  const history = useHistory();
  const account = useSelector((state) => state.allNft.account);
  const artTokenContract = useSelector(
    (state) => state.allNft.artTokenContract
  );

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

  async function createNFT(event) {
    event.preventDefault();
    const { title, description, price } = formData;

    console.log("title: " + title);

    const data = new FormData();
    data.append("name", title);
    data.append("description", description);
    data.append("price", price);

    if(selectedFile){
      data.append('img', selectedFile);
      console.log("slectedFile: ", selectedFile);
    }

    try {
      const totalSupply = await artTokenContract.methods.totalSupply().call();
      data.append("tokenId", Number(totalSupply) + 1);

      const response = await api.post("/tokens", data, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        },
      });
      console.log(response);

      mint(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  async function mint(tokenMetadataURL) {
    try {
      const receipt = await artTokenContract.methods
        .mint(tokenMetadataURL)
        .send({ from: account });
      history.push('/explore');
    } catch (error) {
      console.error("Error, minting: ", error);
      alert("Error while minting!");
    }
  }

  return (
    <>
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
