import { PageHeader, Text, Box, Tabs } from 'gestalt'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import 'gestalt/dist/gestalt.css';

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(1);
    const tabs = [
        { href: "/about", text: "About" },
        { href: "/", text: "Porfolio" },
    ];
    useEffect(() => {
        // Update the document title using the browser API
        const match = tabs.findIndex(x => x.href === location.pathname);
        if (match >= 0) {
            setActiveIndex(match);
        }
    }, []);
    const handleChange = ({ activeTabIndex, event }) => {
        event.preventDefault();
        setActiveIndex(activeTabIndex);
        navigate(tabs[activeTabIndex].href, { replace: true });
    };
    return (
        <Box display='flex' direction='column' flex='grow'>
            <PageHeader
                title={
                    <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Enzio Nguyen
                    </span>
                }
                subtext={
                    <Text size="200">
                        <span style={{ fontFamily: 'Montserrat, sans-serif', fontStyle: 'italic' }}>
                            Photographer
                        </span>
                    </Text>
                }
                primaryAction={
                    <>
                        <Box padding={1}>
                            <Tabs
                                activeTabIndex={activeIndex}
                                onChange={handleChange}
                                tabs={tabs}
                                wrap="false"
                            />
                        </Box>
                    </>
                }
            />
        </Box>
    );
};

export default NavBar;
