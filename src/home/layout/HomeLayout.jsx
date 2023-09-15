import { ResponsiveAppBar } from "../../components";
import { InfoBar } from "../components/InfoBar";
import { Box, Divider } from "@mui/material";


export const HomeLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column' }}>
            <ResponsiveAppBar />

            <Box sx={{ display: 'flex', flex: '1', flexDirection: 'row', minHeight: '89vh' }}>
                <InfoBar />
                <Divider orientation="vertical" flexItem />
                {children}
            </Box>
        </Box>
    )
}
