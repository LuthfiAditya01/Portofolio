import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: [{
        type: String,
        enum: ['Frontend', 'Backend', 'Database', 'Mobile', 'DevOps', 'Design', 'Cloud', 'Framework', 'Language', 'Tools']
    }],
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        default: 'Intermediate'
    },
    icon: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '#00FFD1'
    },
    description: {
        type: String,
        default: ''
    },
    projectCount: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Skill', skillSchema);