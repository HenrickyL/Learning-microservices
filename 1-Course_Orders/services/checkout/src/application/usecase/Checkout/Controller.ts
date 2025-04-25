import { CheckoutUseCase } from ".";
import { IController } from '@shared/infra/base/IController';

export class CheckoutController implements IController<any, any>{
    constructor(
        readonly useCase: CheckoutUseCase
    ){}
    
    async handle(request: any): Promise<any> {
        const response = this.useCase.execute(request);
        return response;
    }

    formatData(request: any) {
        throw new Error("Method not implemented.");
    }
}