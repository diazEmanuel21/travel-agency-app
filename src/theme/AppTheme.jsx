import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext } from "../context"

export const AppTheme = ({ children }) => {
    const { theme } = useContext(ColorModeContext);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
