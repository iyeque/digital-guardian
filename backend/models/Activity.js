const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  type: {
    type: String,
    enum: ['game', 'video', 'reading', 'exercise'],
    required: true
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  ageRange: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  difficulty: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  subjects: [String],
  duration: Number,
  points: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Activity', activitySchema); 