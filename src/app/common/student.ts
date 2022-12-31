import { Admission } from "./admission";
import { Diploma } from "./diploma";
import { DocStudent } from "./doc-student";
import { Enrollment } from "./enrollment";
import { Language } from "./language";

export class Student {
    firstName!: string;
    lastName!: string;
    cin!: string;
    passport!: string;
    birthDay!: string;
    picture!: string;
    phone!: string;
    email!: string;
    adress!: string;
    zipCode!: string;
    country!: string;
    town!: string;
    studyLevel!: string;
    status!: string;
    sex!: string;
    diplomas!: Diploma[];
    languages!: Language[];
    admissions!: Admission[];
    enrollment!: Enrollment;
    docStudents!: DocStudent[];
    var!: string;
    createdAt!: Date;
    updatedAt!: Date;
}
