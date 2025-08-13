import bcrypt from 'bcryptjs';
import connectDB from '../database/connect.js';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const hashPasswords = async () => {
    try {
        await connectDB();
        console.log('Connected to database');

        // Get all users
        const users = await User.find({});
        console.log(`Found ${users.length} users`);

        // Hash passwords for each user
        for (const user of users) {
            // Check if password is already hashed (bcrypt hashes start with $2a$ or $2b$)
            if (!user.password.startsWith('$2a$') && !user.password.startsWith('$2b$')) {
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(user.password, saltRounds);
                
                // Update user with hashed password
                await User.findByIdAndUpdate(user._id, { password: hashedPassword });
                console.log(`Hashed password for user: ${user.email}`);
            } else {
                console.log(`Password already hashed for user: ${user.email}`);
            }
        }

        console.log('All passwords have been hashed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error hashing passwords:', error);
        process.exit(1);
    }
};

hashPasswords();
