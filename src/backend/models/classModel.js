import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
    startTime: { type: String },
    endTime: { type: String },
    daysOfWeek: [{ type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] }],
});

const studentEnrolledSchema = new mongoose.Schema({
    studentId: { type: String },
    studentName: { type: String },
    enrollmentDate: { type: Date },
});

const testSchema = new mongoose.Schema({
    testId: { type: String },
    testName: { type: String },
    testDate: { type: Date },
    totalMarks: { type: Number },
});

const classSchema = new mongoose.Schema({
    className: { type: String, required: true },
    subject: { type: String, required: true },
    teacherId: { type: String, required: true },
    schedule: scheduleSchema,
    studentsEnrolled: [studentEnrolledSchema],
    tests: [testSchema],
});

const Class = mongoose.model('Class', classSchema);
export default Class;
