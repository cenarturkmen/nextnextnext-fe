import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import ImageListComponent from '../../components/ImageList/ImageList';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="body">
          <div className="body-right">
            <div className="heading">
              <Typography variant="h3"> Discover, collect and sell</Typography>
              <Typography variant="h3"> extraordinary NFTs</Typography>
            </div>
            <div className="buttons">
              <Button id="exploreButton" size="large" variant="contained">
                Explore
              </Button>
              <Button
                id="createButton"
                className="button"
                size="large"
                variant="contained"
                color="secondary"
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
