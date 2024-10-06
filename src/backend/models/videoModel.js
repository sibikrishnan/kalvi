import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true }, // Link to the video file
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    uploadedAt: { type: Date, default: Date.now },
    // Additional fields can be added, e.g., duration, description
});

const Video = mongoose.model('Video', videoSchema);
export default Video;
