import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TravelAgencyContext } from '../../context';
import { setActiveHotel, setActiveRoom, startDeletingHotel } from '../../store/admin';
import { setShowBackdrop } from '../../store/home/homeSlice';
import { styled, alpha } from '@mui/material/styles';
import { Menu, MenuItem, Divider, IconButton } from '@mui/material';
/* ICONS */
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export const OptionsList = ({ hotel }) => {
    const dispatch = useDispatch();
    const { setNotify } = useContext(TravelAgencyContext);
    const { active } = useSelector(state => state.admin);

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeleteHotel = async () => {
        dispatch(setShowBackdrop(true));
        const result = await dispatch(startDeletingHotel(hotel.id));
        if (result.ok) {
            dispatch(setShowBackdrop(false));
            setNotify('success', result.message);
        } else {
            dispatch(setShowBackdrop(false));
            setNotify('error', result.errorMessage);
        }
    };
    const handleAction = (action) => {
        setAnchorEl(null);
        // if (active !== null) return setNotify('info', 'An action is in process, please finish it to be able to perform a new action.')
        if (action === 'edit') {
            dispatch(setActiveRoom(0));
            dispatch(setActiveRoom([]));
            dispatch(setActiveHotel({ ...hotel }));
        };
        if (action === 'delete') {
            handleDeleteHotel();
        };
    };

    return (
        <div>
            <IconButton
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleAction('edit')} disableRipple>
                    <EditIcon />
                    Edit
                </MenuItem>
                <MenuItem onClick={() => handleAction('delete')} disableRipple>
                    <DeleteIcon />
                    Delete
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem disabled onClick={() => handleAction('view')} disableRipple>
                    <VisibilityIcon />
                    View
                </MenuItem>
                <MenuItem disabled disableRipple>
                    <MoreHorizIcon />
                    More
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
