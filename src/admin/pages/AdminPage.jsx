import { HomeLayout } from "../../home/layout/HomeLayout";
import { NoteView, NothingSelectedView } from "../view"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewHotel } from "../../store/admin/thunks"
import { Fab, Grid } from "@mui/material"

export const AdminPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active: noteActive } = useSelector(state => state.admin)

  const onClickNewNote = () => {
    dispatch(startNewHotel())
  }

  return (
    <HomeLayout module={'admin-manager'}>
      <Grid container sx={{height: '100vh'}}>
        {!!noteActive ? <NoteView /> : <NothingSelectedView />}
        <Fab
          color="primary"
          onClick={onClickNewNote}
          disabled={isSaving}
          sx={{
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined />
        </Fab >
      </Grid>
    </HomeLayout>
  )
}
