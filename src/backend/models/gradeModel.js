import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
    studentId: { type: String, required: true },
    classId: { type: String, required: true },
    testId: { type: String, required: true },
    grade: { type: String, required: true },
    gradeDate: { type: Date, default: Date.now },
});

const Grade = mongoose.model('Grade', gradeSchema);
export default Grade;
