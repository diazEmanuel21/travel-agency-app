import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ColorModeContext, TravelAgencyContext } from "../../context";
import { HomeLayout } from "../../home/layout/HomeLayout";
import { NothingSelectedView } from "../view"
import { CreateManager, ListHotels } from "../components";
import { setShowBackdrop } from "../../store/home/homeSlice";
import { startNewHotel } from "../../store/admin";
import { Fab, Grid, Tooltip } from "@mui/material"
/* ICONS */
import { AddOutlined } from "@mui/icons-material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const AdminPage = () => {
  const dispatch = useDispatch();
  const { mode } = useContext(ColorModeContext);
  const { setNotify } = useContext(TravelAgencyContext);
  const { active, hotels } = useSelector(state => state.admin);

  console.log({hotels});

  const [open, setOpen] = useState(false);
  const colorMode = mode === 'dark' ? 'secondary' : 'primary';

  const handleCreateHotel = async (handleThunk) => {
    if (!handleThunk) return setOpen(true);
    dispatch(setShowBackdrop(true));
    const result = await dispatch(startNewHotel());
    if (result.ok) {
      dispatch(setShowBackdrop(false));
      setNotify('success', result.message);
      setOpen(true);
    } else {
      dispatch(setShowBackdrop(false));
      setOpen(false);
      setNotify('error', result.errorMessage);
    }
  };

  const handelCloseDialog = () => {
    setOpen(false);
  };

  return (
    <HomeLayout module={'admin-manager'}>
      <Grid container
        sx={{
          display: 'flex',
          flex: 1,
          padding: { xs: 1, md: '8px 8px 8px 82px' },
          minHeight: '89vh',
          msOverflowX: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {hotels.length > 0 ? <ListHotels /> : <NothingSelectedView />}
        <Tooltip title={`${active !== null ? 'Resume action' : 'Create a new Hotel'}`}>
          <Fab
            color={colorMode}
            onClick={() => handleCreateHotel(active === null && true)}
            sx={{
              position: 'fixed',
              right: 50,
              bottom: 50
            }}
          >
            {active !== null ? <PlayArrowIcon /> : <AddOutlined />}
          </Fab >
        </Tooltip>
      </Grid>
      <CreateManager
        open={open}
        handleClose={handelCloseDialog}
      />
    </HomeLayout>
  )
}