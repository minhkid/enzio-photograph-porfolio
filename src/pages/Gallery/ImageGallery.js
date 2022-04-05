import { Box, Text, Layer, IconButton, Image, TapArea, Icon } from "gestalt";
import { useState, useEffect } from 'react';
import "./ImageGallery.css";
import Masonry from "react-masonry-component";
import { useParams } from 'react-router-dom';
import porfolio from '../../json/porfolio.json';

const ImageGallery = () => {
    const [imageList, setImageList] = useState([]);
    const [porfolioItem, setPorfolioItem] = useState([]);
    const [showLayer, setShowLayer] = useState(false);
    const [displayImage, setDisplayImage] = useState({});
    const { id } = useParams()

    useEffect(() => {
        // Update the document title using the browser API
        const match = porfolio.find(x => x.id === id);
        setPorfolioItem({ ...match });
        const random = match.images.sort(() => Math.random() - 0.5)
        setImageList([...random]);
    }, []);

    function showImage(imageData) {
        setDisplayImage({ ...imageData });
        setShowLayer(!showLayer);;
    }

    return (
        <>
            <Box display="flex" marginTop={4} justifyContent="center" alignItems="center" >
                <Box width={"92%"} display="flex" direction="row" wrap justifyContent="center">
                    <Box width={"100%"} display="flex" justifyContent="center">
                        <Text size="500" weight="bold">
                            <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                {porfolioItem.name}
                            </span>
                        </Text>
                    </Box>
                    {porfolioItem.address !== '' &&
                        <>
                            <Icon icon="location" accessibilityLabel="" inline="true" color="darkGray" />
                            <Text size="300">
                                <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {porfolioItem.address}
                                </span>
                            </Text>
                        </>
                    }
                </Box>
            </Box>
            <Box width="100%" marginTop={3} display="flex" alignContent="center" justifyContent="center">
                <Box display="inlineBlock" width="95%">
                    <Masonry className="gallery" elementType={"ul"}>
                        {imageList.map((img, i) => {
                            return (
                                <li
                                    key={i}
                                    className="imgContainer"
                                >
                                    <TapArea mouseCursor="zoomIn" onTap={() => showImage(img)}>
                                        <img src={img.placeholderURL} alt="" loading="lazy" />
                                    </TapArea>
                                </li>
                            );
                        })}
                    </Masonry>
                    {showLayer && (
                        <Layer>
                            <Box color="darkWash" position="fixed" top left right bottom display="flex" alignItems="center" justifyContent="center">
                                <Box maxWidth="80%" height={"100%"} rounding={2} display="flex" alignItems="top">
                                    <Box width={2000}>
                                        <Image
                                            alt="example.com"
                                            naturalHeight={1}
                                            naturalWidth={1}
                                            fit="contain"
                                            src={displayImage.originURL}
                                        />
                                    </Box>
                                    <Box marginStart={2} right top position="absolute">
                                        <IconButton
                                            size="xl"
                                            margin="20"
                                            accessibilityLabel="Close"
                                            icon="cancel"
                                            onClick={() => setShowLayer(!showLayer)}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Layer>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default ImageGallery
