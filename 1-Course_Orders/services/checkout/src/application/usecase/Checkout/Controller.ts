import { CheckoutUseCase } from ".";
import { IController } from '@shared/infra/base/IController';
import { CheckoutRequest, CheckoutResponse } from "./DTO";
import { HttpResponseData, HttpResponse } from '@shared/infra/http/response';

export class CheckoutController implements IController<CheckoutRequest, CheckoutResponse>{
    constructor(
        readonly useCase: CheckoutUseCase
    ){}
    
    async handle(request: CheckoutRequest): Promise<HttpResponseData<CheckoutResponse>> {
        const response = await this.useCase.execute(request);
        return HttpResponse.Ok(response);
    }

    formatData(request: CheckoutRequest) : CheckoutRequest {
        return request;
    }
}