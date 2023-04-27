import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import { useTranslation } from '../../../translate';

const ServicesInfo = () => {

    const language = useSelector((state) => state.products.language);
    const t = useTranslation(language);

    return (
        <Box sx={{ mt: 5 }}>
            <List
                sx={{ width: '100%', bgcolor: 'background.paper', p: 2 }}
            >
                {t.main.services.list.map((item, i) => (
                    <ListItem key={i} disablePadding >
                        <ListItemButton>
                            <CircleIcon sx={{ color: 'orange' }} />
                            <ListItemText
                                sx={{
                                    ml: 2,
                                }}
                                primaryTypographyProps={{ fontSize: { xs: '15px', sm: '18px', md: '20px' } }}
                                primary={item}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default ServicesInfo;