import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'

const Header = ({ title, subtitle }) => {
    const theme = useTheme()
    const { user } = useSelector((state) => state.auth)

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
                <Typography
                    variant="h2"
                    color={theme.palette.secondary[100]}
                    fontWeight="bold"
                    sx={{ mb: "5px" }}
                >
                    {title}
                </Typography>
               
            </Box>
           
        </Box>
    )
}

export default Header
