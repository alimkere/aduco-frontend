import { Department } from "./department";
import { DocEmploye } from "./doc-employe";

export class Employe {
    id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    poste!: string;
    picture!: string;
    department: Department | null = null;
    docEmploye?: DocEmploye[];
    createdAt?: Date;
    updatedAt?: Date;
}

