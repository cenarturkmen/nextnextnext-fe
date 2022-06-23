import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import getWeb3 from "../../utils/getWeb3";
import "./Home.css";
import ImageListComponent from "../../components/ImageList/ImageList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../services/api";

import ArtMarketplace from "../../contracts/ArtMarketplace.json";
import ArtToken from "../../contracts/ArtToken.json";

import {
  setNft,
  setAccount,
  setTokenContract,
  setMarketContract,
} from "../../redux/actions/nftActions";

const Home = () => {

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

  return (
    <>
      <div className="home">
        <div className="body">
          <div className="body-right">
            <div className="heading">
              <Typography variant="h3"> Discover, collect and sell</Typography>
              <Typography variant="h3"> extraordinary NFTs</Typography>
            </div>
            <div className="buttons">
              <Button
                id="exploreButton"
                size="large"
                variant="contained"
                onClick={() => {
                  window.location.href = "/explore";
                }}
              >
                Explore
              </Button>
              <Button
                id="createButton"
                className="button"
                size="large"
                variant="contained"
                color="secondary"
                onClick={() => {
                  window.location.href = "/create";
                }}
              >
                Create
              </Button>
            </div>
          </div>
          <div>
            <div className="imageList">
              <div className="images">
                <ImageListComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
