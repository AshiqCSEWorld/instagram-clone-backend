const mongoose = require('mongoose');

const { Schema } = mongoose;

const likeSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },

  like_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  like_time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Like', likeSchema);
