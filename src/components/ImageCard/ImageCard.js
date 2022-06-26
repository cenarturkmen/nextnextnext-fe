import React from 'react';
import {Link} from 'react-router-dom';
import Web3 from 'web3';

import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import {ReactComponent as EthereumLogo} from '../../svg/ethereum_logo.svg';
import './ImageCard.css';

const ImageCard = ({tokenId, name, image, price, owner, isForSale}) => {
  return (
    <Link to={`/nft/${tokenId}`}>
      <Card className="item-root">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="240"
            image={image}
            title={name}
          />
          <CardContent className="item-content">
            <div className="item-title">
              <Typography className="item-heading" variant={'h5'} gutterBottom>
                {name}
              </Typography>
              {isForSale ? (              <Chip hidden={!isForSale}
                size="small"
                disabled={true}
                label="Selling"
                className="item-badge"
              />) : ''}

            </div>
            <div>
            <Typography variant="body1" className="item-price">
              <SvgIcon
                component={EthereumLogo}
                viewBox="0 0 400 426.6"
                titleAccess="ETH"
              />
              <span>{Web3.utils.fromWei(String(price), 'ether')}</span>
            </Typography>
            <Divider className="item-divider" light />
            <Typography
              variant={'body1'}
              align={'center'}
              className="item-seller"
            >
              {owner.slice(0, 7)}...{owner.slice(-4)}
            </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ImageCard;
