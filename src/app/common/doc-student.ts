import { Student } from "./student";

export class DocStudent {
    name!: string;
    file!: string;
    student?: Student;
    createdAt?: Date;
    updatedAt?: Date;
}
