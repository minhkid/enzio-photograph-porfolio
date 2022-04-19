import { Box, Image, Text, Heading, IconButton, Column, Divider } from "gestalt";

const AboutPage = () => {

    return (
        <Box display="flex" marginTop={7} direction="column" justifyContent="center" alignItems="center">
            <Box width={"92%"}>
                <Text size="400">
                    <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        ABOUT ME
                        </span>
                </Text>
                <Box display="flex" direction="row" wrap>
                    <Column span={12} mdSpan={6}>
                        <Box padding={4} height={800}>
                            <Image
                                alt="example.com"
                                naturalHeight={564}
                                naturalWidth={564}
                                fit="contain"
                                src="https://drive.google.com/uc?id=1gNt3W4s-3cPAIbq0cR2-DSNy2lPFaQDF"
                            />
                        </Box>
                    </Column>
                    <Column span={12} mdSpan={6}>
                        <Box padding={8} height="100%" display="flex" direction="column" justifyContent="center" alignItems="center">
                            <Text align="center" size="500">HO CHI MINH CITY BASED PHOTOGRAPHER</Text>
                            <Box width={"90%"} marginTop={7}>
                                <Text align="center" italic size="300">I am a central Saigon based freelance photographer, specialising in travel, food and people photography.</Text>
                                <Text align="center" italic size="300">Having always enjoyed strategizing and crafting visual messaging which strike the emotions, my photography has to exude sophistication, personality and approachability</Text>
                            </Box>
                        </Box>
                    </Column>
                </Box>
                <Divider />
                <Box display="flex" padding={2} direction="row">
                    <Box width={"50%"} >
                        <Box display="flex" direction="row" wrap>
                            <Text align="center" size="300">
                                <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    enzionguyen@gmail.com
                            </span>
                            </Text>
                        </Box>
                        <Box display="flex" direction="row" wrap>
                            <Text align="center" size="300">
                                <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    Tel: +84932717678
                            </span>
                            </Text>
                        </Box>
                    </Box>
                    <Box width={"50%"} display="flex" alignItems="end" justifyContent="end">
                        <IconButton
                            accessibilityLabel="Go to my Facebook"
                            icon="facebook"
                            href="https://www.facebook.com/quang.minh.583"
                            role="link"
                            tooltip={{ text: "Facebook" }}
                        />
                        <IconButton
                            accessibilityLabel="Go to my Instagram"
                            icon="camera"
                            href="https://www.instagram.com/enzionguyen"
                            tooltip={{ text: "Instagram" }}
                        />
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default AboutPage;
