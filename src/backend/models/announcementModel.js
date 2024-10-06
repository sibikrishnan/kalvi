import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    postedDate: { type: Date, default: Date.now },
    postedBy: { type: String },
});

const Announcement = mongoose.model('Announcement', announcementSchema);
export default Announcement;
