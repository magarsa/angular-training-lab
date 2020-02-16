import { Branch } from './branch';

export class Agent {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    // branch: Branch;
    active: boolean;

    constructor(init?: Partial<Agent>){
        Object.assign(this, init);
    }
}