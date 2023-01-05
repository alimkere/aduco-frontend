import { Student } from "./student";

export class Diploma {
    serie!: string;
    beginDate!: Date;
    endDate!: Date;
    file!: string;
    mention!: string;
    school!: string;
    country!: string;
    title!: string;
    student?: Student;
}
