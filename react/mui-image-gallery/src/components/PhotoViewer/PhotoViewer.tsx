import React, { useState, useRef, useCallback } from 'react';
import { Box, Button, Stack } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import DeleteIcon from '@mui/icons-material/Delete';

// https://zenn.dev/ryota0222/articles/d574bae11306b0


const PhotoViewer = () => {
  


  const [imageIndex, setImageIndex] = useState(-1);
  const [imageSrc, setImageSrc] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  const ref = useRef<HTMLDialogElement | null>(null);


  const handleOpenDialog = useCallback(() => {
    if (ref.current) ref.current.showModal();
  }, [ref]);
  
  const handleCloseDialog = useCallback(() => {

    setImageSrc('');
    setImageAlt('');

    setImageIndex(-1);


    if (ref.current) ref.current.close();
  }, [ref]);

  const handleClickInDialog = useCallback(
    
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    []
  );

  const handleOpenDialogSelected = useCallback((imageIndex) => {

    console.log(`imageIndex=${imageIndex}`)

    console.log(itemData[imageIndex])
    setImageSrc(itemData[imageIndex].img);
    setImageAlt(itemData[imageIndex].title);
    setImageIndex(imageIndex);

    if (ref.current) ref.current.showModal();
  }, [ref]);


  const handlePrevImage = (e) => {
    console.log(`imageIndex=${imageIndex}`)
    e.stopPropagation();
    if (imageIndex > 0) {
      const newIndex = imageIndex-1
      console.log(`${imageIndex} ⇒ ${newIndex}`)
      setImageIndex(newIndex);
    }
    // if (ref.current) ref.current.showModal();
  };

  const handleNextImage = (e) => {
    console.log(`imageIndex=${imageIndex}`)
    e.stopPropagation();
    if (imageIndex < itemData.length) {
      const newIndex = imageIndex+1
      console.log(`${imageIndex} ⇒ ${newIndex}`)
      setImageIndex(newIndex);
    }

    // if (ref.current) ref.current.showModal();
  };



  
  return (
    <Stack alignSelf="center">
      <ImageList gap={64} sx={{ width: 920, height: 450 }}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              // onClick={()=>alert(`image clicked ${item.img}`)}
              // onClick={handleOpenDialog}
              onClick={()=> handleOpenDialogSelected(index)}
              onKeyDown={handleOpenDialog}
            />
            {/* <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
              
            /> */}
            <Stack mx={2} direction="row" justifyContent="space-between">
              <Box>{item.title}</Box>
              <Box onClick={()=>alert('clicked')}><DeleteIcon/></Box>
            </Stack>
          </ImageListItem>
        ))}
      </ImageList>

      <dialog ref={ref} className="image-dialog" onClick={handleCloseDialog}>
        <Stack direction="row">
          <Button onClick={handlePrevImage} ><ArrowBackIosNewOutlinedIcon/></Button>
          <div className="contents">
            { imageIndex >= 0 &&
              <img 
                src={itemData[imageIndex].img} alt={itemData[imageIndex].title} width="900" />
            }
          </div>
          <Button onClick={handleNextImage} ><ArrowForwardIosOutlinedIcon/></Button>
        </Stack>
      </dialog>

    </Stack>
  );

  
};

export default PhotoViewer;


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

