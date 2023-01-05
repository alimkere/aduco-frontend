import { Payment } from "./payment";
import { Student } from "./student";

export class Enrollment {
    session!: string;
    student?: Student;
    payment?: Payment;
    createdAt?: Date;
    updatedAt?: Date;
}
