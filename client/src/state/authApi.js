const BASE_URL = 'http://localhost:9000'

export const authAPI = {
    login: async (email, password) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Login failed')
            }

            return data
        } catch (error) {
            throw error
        }
    },

    verifyToken: async (token) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/verify`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Token verification failed')
            }

            return data
        } catch (error) {
            throw error
        }
    }
}
