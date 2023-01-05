import { Enrollment } from "./enrollment";

export class Payment {
    paymentDate!: Date;
    description!: string;
    amount!: number;
    transactionNumber!: string;
    enrollment?: Enrollment;
}
