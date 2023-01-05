import { Student } from "./student";

export class Language {
    name!: string;
    type!: string;
    level!: string;
    student?: Student;
    createdAt?: Date;
    updatedAt?: Date;
}
