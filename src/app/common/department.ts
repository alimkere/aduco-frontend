import { Employe } from "./employe";

export class Department {
    name!: string;
    employes!: Employe[];
    createdAt!: Date;
    updatedAt!: Date;
}
