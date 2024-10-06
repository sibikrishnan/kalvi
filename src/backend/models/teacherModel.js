import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
});

const subjectTaughtSchema = new mongoose.Schema({
    subjectId: { type: String },
    subjectName: { type: String },
});

const classAssignedSchema = new mongoose.Schema({
    classId: { type: String },
    className: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
});

const teacherSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    address: addressSchema,
    hireDate: { type: Date },
    subjectsTaught: [subjectTaughtSchema],
    classesAssigned: [classAssignedSchema],
});

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
