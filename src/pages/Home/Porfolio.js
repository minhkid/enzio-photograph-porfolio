import { Box, Text, Card, Flex, Link, Layer, IconButton, TapArea, Column } from "gestalt";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import porfolio from '../../json/porfolio.json';

const Porfolio = () => {
    const navigate = useNavigate();
    const [showLayer, setShowLayer] = useState(false);
    const [porfolioList, setPorfolioList] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        const random = porfolio.sort(() => Math.random() - 0.5)
        setPorfolioList([...random]);
    }, []);

    function showDetail(imageData) {
        navigate('/gallery/' + imageData.id);
    }

    return (
        <Box display="flex" marginTop={7} justifyContent="center" alignItems="center" >
            <Box width={"92%"}>
                <Text size="400">
                    <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        P O R F O L I O
                    </span>
                </Text>
                <Box display="flex" direction="row" wrap>
                    {porfolioList.map((imageData, i) => {
                        return (
                            <Column span={12} mdSpan={4} key={imageData.id}>
                                <Box justifyContent="center" alignItems="center" margin={3}>
                                    <TapArea mouseCursor="pointer" onTap={() => showDetail(imageData)} rounding={4}>
                                        <Card image={<img
                                            alt="Test"
                                            style={{ width: '100%', objectFit: "cover", height: '257px' }}
                                            loading="lazy"
                                            src={imageData.url}
                                        />}>
                                            <Flex direction="column" justifyContent="center">
                                                <Text align="center" weight="bold">
                                                    <Link>
                                                        <Box paddingX={3} paddingY={2}>
                                                            <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                                {imageData.name.toUpperCase()}
                                                            </span>
                                                        </Box>
                                                    </Link>
                                                </Text>
                                            </Flex>
                                        </Card>
                                    </TapArea>
                                </Box>
                            </Column>

                        )
                    })}
                    {showLayer && (
                        <Layer>
                            <Box color="darkWash" position="fixed" top left right bottom display="flex" alignItems="center" justifyContent="center">
                                <Box maxWidth="70%" rounding={2} display="flex" alignItems="top">
                                    <Box>
                                        <img
                                            alt="Test"
                                            style={{ display: 'block', width: '100%' }}
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
        </Box>
    )
}

export default Porfolio;
