import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./Home.css";
import ImageListComponent from "../../components/ImageList/ImageList";

const Home = () => {
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
