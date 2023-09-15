import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view"
import IconButton from '@mui/material/IconButton'
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active: noteActive } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>
        {!!noteActive ? <NoteView /> : <NothingSelectedView />}
        <IconButton
          onClick={onClickNewNote}
          size='large'
          disabled={isSaving}
          sx={{
          /*   color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, */
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ size: 30 }} />
        </IconButton>
    </JournalLayout >
  )
}
