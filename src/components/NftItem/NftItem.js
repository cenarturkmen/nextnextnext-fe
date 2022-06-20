import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const NftItem = (props) => {
  return (
    <ImageListItem>
      <img
        src={`${props.img}?w=248&fit=crop&auto=format`}
        srcSet={`${props.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={props.title}
        loading="lazy"
      />

      <ImageListItemBar
        title={props.title}
        subtitle={props.author}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${props.title}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default NftItem;
