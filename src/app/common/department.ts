import { Employe } from "./employe";

export class Department {
    id!: number;
    name!: string;
    employes?: Employe[];
}
