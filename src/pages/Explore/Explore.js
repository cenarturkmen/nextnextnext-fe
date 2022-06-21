import { Typography, ImageList, Divider } from "@mui/material";

import "./Explore.scss";
import Navbar from "../../components/Navbar/Navbar";
import NftItem from "../../components/NftItem/NftItem";

const Explore = () => {
  return (
    <div className="explore">
      <Navbar />
      <div className="exploreBody">
        <div className="heading">
          <Typography variant="h3">Explore</Typography>
          <Typography variant="h6">Find the best NFTs to buy</Typography>
          <Divider />
        </div>
        <div className="content">
          <div className="nfts">
            <div className="nft">
              <ImageList
                id="imageList"
                cols={window.innerWidth > 600 ? 5 : 2}
                variant="vowen"
              >
                {itemData.map((item) => (
                  <NftItem
                    key={item.img}
                    img={item.img}
                    title={item.title}
                    author={item.author}
                  />
                ))}
              </ImageList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

const itemData = [
  {
    img: "https://source.unsplash.com/random/?city,night",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/400x300?party",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/user/wsanter",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://source.unsplash.com/random/300x300?city,night",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/300x300?anime",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/300x300?nike",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/300x300?street",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/300x300?party",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/400x300?party",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/400x300?party",
    title: "Camera",
    author: "@helloimnik",
  },

  {
    img: "https://source.unsplash.com/random/400x300?party",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/431x300?party",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/410x300?party",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/430x300?party",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://source.unsplash.com/random/450x300?party",
    title: "Camera",
    author: "@helloimnik",
  },
];
