import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ColorModeContext } from "../../context";
import { HomeLayout } from "../../home/layout/HomeLayout";
import { NothingSelectedView } from "../view"
import { CreateManager } from "../components";
import { Fab, Grid, Tooltip } from "@mui/material"
/* ICONS */
import { AddOutlined } from "@mui/icons-material";

export const AdminPage = () => {
  const { mode } = useContext(ColorModeContext);
  const { isSaving } = useSelector(state => state.admin);

  const [open, setOpen] = useState(false);

  const colorMode = mode === 'dark' ? 'secondary' : 'primary';

  const handleState = value => {
    setOpen(value);
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
        <NothingSelectedView />
        {/* {!!hotelActive ? <HotelView /> : <NothingSelectedView />} */}
        {/* <HotelView/> */}
        <Tooltip title="Create a new Hotel">
          <Fab
            color={colorMode}
            onClick={() => handleState(true)}
            disabled={isSaving}
            sx={{
              position: 'fixed',
              right: 50,
              bottom: 50
            }}
          >
            <AddOutlined />
          </Fab >
        </Tooltip>
      </Grid>
      <CreateManager
        open={open}
        handleState={handleState}
      />
    </HomeLayout>
  )
}
