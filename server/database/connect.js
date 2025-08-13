import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const mongoUri = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/admin_dashboard';
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error?.message || error);
    }
}

export default connectDB