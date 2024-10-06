import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
});

const classEnrolledSchema = new mongoose.Schema({
    classId: { type: String },
    className: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
});

const attendanceSchema = new mongoose.Schema({
    classId: { type: String },
    date: { type: Date },
    status: { type: String, enum: ['Present', 'Absent', 'Late', 'Excused'] },
});

const gradeSchema = new mongoose.Schema({
    classId: { type: String },
    testId: { type: String },
    grade: { type: String },
    gradeDate: { type: Date },
});


const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    address: addressSchema,
    enrollmentDate: { type: Date },
    classesEnrolled: [classEnrolledSchema],
    attendance: [attendanceSchema],
    grades: [gradeSchema],
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
