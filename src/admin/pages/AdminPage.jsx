import { AdminLayout } from "../layout/AdminLayout"
import { NoteView, NothingSelectedView } from "../view"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/admin/thunks"
import { Fab } from "@mui/material"

export const AdminPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active: noteActive } = useSelector(state => state.admin)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
  return (
    <AdminLayout>
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
    </AdminLayout >
  )
}
