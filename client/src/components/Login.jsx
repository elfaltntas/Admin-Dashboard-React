import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Button,
    TextField,
    Typography,
    Container,
    Paper,
    Alert,
    CircularProgress,
    useTheme
} from '@mui/material'
import { loginStart, loginSuccess, loginFailure, clearError } from '../state/authSlice'
import { authAPI } from '../state/authApi'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const theme = useTheme()
    const { loading, error, isAuthenticated, token} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isAuthenticated && token) {
            navigate('/dashboard')
        }
    }, [isAuthenticated, token, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!email || !password) {
            dispatch(loginFailure('Please fill in all fields'))
            return
        }

        if (!email.includes('@')) {
            dispatch(loginFailure('Please enter a valid email address'))
            return
        }

        try {
            dispatch(loginStart())
            const data = await authAPI.login(email, password)
            dispatch(loginSuccess(data))
        } catch (error) {
            dispatch(loginFailure(error.message))
        }
    }

    const handleClearError = () => {
        dispatch(clearError())
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 15s ease infinite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(79, 172, 254, 0.3) 0%, transparent 50%)',
                    pointerEvents: 'none',
                },
                '@keyframes gradientShift': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' }
                }
            }}
        >
            <Container component="main" maxWidth="xs" sx={{ 
                px: { xs: 1, sm: 3 },
                py: { xs: 1, sm: 3 },
                position: 'relative',
                zIndex: 1
            }}>
                <Paper
                    elevation={0}
                    sx={{
                        padding: { xs: 3, sm: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '24px',
                        boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                        position: 'relative',
                        overflow: 'hidden',
                        transform: 'translateY(0px)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 35px 65px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                            transition: 'left 0.5s',
                        },
                        '&:hover::before': {
                            left: '100%',
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            boxShadow: '0 10px 30px rgba(118, 75, 162, 0.4)',
                            animation: 'pulse 2s ease-in-out infinite alternate',
                            '@keyframes pulse': {
                                '0%': { 
                                    transform: 'scale(1)',
                                    boxShadow: '0 10px 30px rgba(118, 75, 162, 0.4)'
                                },
                                '100%': { 
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 15px 40px rgba(118, 75, 162, 0.6)'
                                }
                            }
                        }}
                    >
                        <Typography 
                            sx={{ 
                                fontSize: '2rem', 
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            🔒
                        </Typography>
                    </Box>

                    <Typography 
                        component="h1" 
                        variant="h4" 
                        sx={{ 
                            mb: 1, 
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: 'bold',
                            fontSize: { xs: '1.75rem', sm: '2.125rem' },
                            textAlign: 'center',
                            letterSpacing: '-0.02em'
                        }}
                    >
                    Login
                    </Typography>
                   

                    {error && (
                        <Alert 
                            severity="error" 
                            sx={{ 
                                width: '100%', 
                                mb: 2,
                                borderRadius: '12px',
                                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                '& .MuiAlert-message': {
                                    fontSize: { xs: '0.875rem', sm: '1rem' }
                                }
                            }}
                            onClose={handleClearError}
                        >
                            {error}
                        </Alert>
                    )}

                    <Box 
                        component="form" 
                        onSubmit={handleSubmit} 
                        sx={{ 
                            width: '100%',
                            '& .MuiTextField-root': {
                                mb: 2.5
                            }
                        }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    transition: 'all 0.3s ease',
                                    '& fieldset': {
                                        borderColor: 'rgba(102, 126, 234, 0.2)',
                                        borderWidth: '1px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#667eea',
                                        borderWidth: '2px',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#667eea',
                                        borderWidth: '2px',
                                        boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
                                    },
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                        transform: 'translateY(-1px)',
                                    }
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#6b7280',
                                    '&.Mui-focused': {
                                        color: '#667eea',
                                    }
                                },
                            }}
                        />
                        
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    transition: 'all 0.3s ease',
                                    '& fieldset': {
                                        borderColor: 'rgba(102, 126, 234, 0.2)',
                                        borderWidth: '1px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#667eea',
                                        borderWidth: '2px',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#667eea',
                                        borderWidth: '2px',
                                        boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
                                    },
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                        transform: 'translateY(-1px)',
                                    }
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#6b7280',
                                    '&.Mui-focused': {
                                        color: '#667eea',
                                    }
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ 
                                mt: 3, 
                                mb: 2,
                                height: { xs: 48, sm: 52 },
                                fontSize: { xs: '1rem', sm: '1.1rem' },
                                fontWeight: '600',
                                textTransform: 'none',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                border: 'none',
                                boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                                    transition: 'left 0.5s',
                                },
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.6)',
                                    background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                                },
                                '&:hover::before': {
                                    left: '100%',
                                },
                                '&:active': {
                                    transform: 'translateY(0px)',
                                },
                                '&:disabled': {
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    opacity: 0.7,
                                    transform: 'none',
                                    boxShadow: '0 4px 20px rgba(102, 126, 234, 0.2)',
                                }
                            }}
                            disabled={loading}
                        >
                            {loading ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CircularProgress 
                                        size={20} 
                                        sx={{ 
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            '& .MuiCircularProgress-circle': {
                                                strokeLinecap: 'round',
                                            }
                                        }} 
                                    />
                                    <Typography sx={{ color: 'white', fontWeight: '600' }}>
                                      Submit
                                    </Typography>
                                </Box>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}

export default Login