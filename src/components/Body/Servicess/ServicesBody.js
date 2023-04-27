import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import ServicesInfo from "./ServicesInfo";
import { useTranslation } from '../../../translate';

const ServicesBody = () => {

    const language = useSelector((state) => state.products.language);
    const t = useTranslation(language);

    return (
        <Box sx={{ mt: 5 }}>
            <Typography
                variant="h2"
                component='h5'
                sx={{
                    fontWeight: 400,
                    fontSize: { xs: 25, sm: 30, md: 40 }
                }}
            >
                {t.main.services.steps}
            </Typography>
            <ServicesInfo />
        </Box>
    )
}

export default ServicesBody