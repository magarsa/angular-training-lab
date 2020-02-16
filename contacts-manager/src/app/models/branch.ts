export class Branch {
    code: string;
    fullName: string;
    state: string;

    constructor(init?: Partial<Branch>){
        Object.assign(this, init);
    }
}
