import { Student } from "./student";

export class Admission {
    mainChoice!: string
    secondChoice!: string;
    appFeesPayDate!: Date;
    appFees!: number;
    graduationPlace!: string;
    appFeesProof!: string;
    session!: string;
    student?: Student;
    createdAt?: Date;
    updatedAt?: Date;
}
