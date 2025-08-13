import React, { useState } from 'react'
import { 
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    ArrowDropDownOutlined
} from '@mui/icons-material'
import FlexBetween from 'components/FlexBetween'
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from 'state'
import { logout } from '../state/authSlice'
import ProfileImage from 'assets/profile.jpeg'
import { 
    AppBar,
    Toolbar,
    useTheme,
    IconButton,
    Button,
    Box,
    Typography,
    Menu,
    MenuItem
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Navbar = ({
    isSidebarOpen,
    setIsSidebarOpen
}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const theme = useTheme()
    const { user } = useSelector((state) => state.auth) // Redux store’dan user çekiliyor

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    const [anchorEl, setAnchorEl] = useState(null)
    const isOpen = Boolean(anchorEl)

    const handleClick = (e) => setAnchorEl(e.currentTarget)
    const handleClose = () => setAnchorEl(null)

    return (
        <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* LEFT SIDE - Sadece Menü Butonu Kaldı */}
                <FlexBetween>
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>
                </FlexBetween>

                {/* RIGHT SIDE - Sadece Tema Değiştirme ve Profil Kaldı */}
                <FlexBetween gap="1.5rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlined sx={{ fontSize: "25px" }} />
                        ) : (
                            <LightModeOutlined sx={{ fontSize: "25px" }} />
                        )}
                    </IconButton>

                    {/* Profil & Hoş Geldiniz */}
                    <FlexBetween gap="1rem" alignItems="center">
                        {user && (
                            <Typography variant="body2" sx={{ color: theme.palette.secondary[300] }}>
                                Welcome, {user.name}
                            </Typography>
                        )}

                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textTransform: "none",
                                gap: "1rem"
                            }}
                        >
                            <Box
                                component="img"
                                alt="profile"
                                src={ProfileImage}
                                height="40px"
                                width="40px"
                                borderRadius="50%"
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign="left">
                                <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: theme.palette.secondary[100] }}>
                                    {user.name}
                                </Typography>
                                <Typography fontWeight="bold" fontSize="0.75rem" sx={{ color: theme.palette.secondary[200] }}>
                                    {user.occupation}
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined sx={{ color: theme.palette.secondary[300], fontSize: "25px" }} />
                        </Button>

                        <Menu
                            anchorEl={anchorEl}
                            open={isOpen}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        >
                            <MenuItem onClick={handleLogout} sx={{ color: theme.palette.error.main }}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar