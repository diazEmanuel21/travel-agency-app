import { Box, IconButton, Tooltip } from '@mui/material'
import { SwitchColorMood } from '../../components'
/* Icons */
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const InfoBar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: 50,
                color: 'white',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            <Box sx={{
                display: 'flex',
                flex: '1',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}>
                <Tooltip title="aweasome D.A." placement='right'>
                    <IconButton color='secondary'>
                        <FacebookIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="@agencyDiamond_1962" placement='right'>
                    <IconButton color='secondary'>
                        <TwitterIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="@agency_DA" placement='right'>
                    <IconButton color='warning'>
                        <InstagramIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Diamond Agency" placement='right'>
                    <IconButton color='error'>
                        <YouTubeIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{
                display: 'flex',
                flex: '1',
                alignItems: 'end',
            }}>
                <SwitchColorMood />
            </Box>
        </Box>

    )
}
