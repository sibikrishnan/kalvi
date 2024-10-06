import mongoose from 'mongoose';

const testResultSchema = new mongoose.Schema({
    studentId: { type: String },
    grade: { type: String },
    marksObtained: { type: Number },
});

const testSchema = new mongoose.Schema({
    classId: { type: String, required: true },
    testName: { type: String, required: true },
    testDate: { type: Date, required: true },
    totalMarks: { type: Number, required: true },
    testResults: [testResultSchema],
});

const Test = mongoose.model('Test', testSchema);
export default Test;
