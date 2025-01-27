const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['child', 'parent'],
    required: true
  },
  age: {
    type: Number,
    required: function() { return this.role === 'child'; }
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: function() { return this.role === 'child'; }
  },
  screenTimeLimit: {
    type: Number,
    default: 120 // minutes
  },
  achievements: [{
    name: String,
    description: String,
    dateEarned: Date,
    icon: String
  }],
  progress: {
    totalPoints: { type: Number, default: 0 },
    completedActivities: [String],
    learningPath: [String],
    skillLevels: {
      type: Map,
      of: Number,
      default: {}
    }
  },
  lastActive: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema); 