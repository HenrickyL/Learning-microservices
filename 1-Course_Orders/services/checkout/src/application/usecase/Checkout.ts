import { IUseCase } from "../infra/IUseCase";

export class Checkout implements IUseCase{
    execute(input: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}