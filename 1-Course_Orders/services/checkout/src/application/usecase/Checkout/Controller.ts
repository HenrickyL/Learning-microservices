import { CheckoutUseCase } from ".";
import { IController } from '@shared/infra/base/IController';
import { HttpResponse, Ok } from "@shared/infra/httpResponse";
import { CheckoutRequest, CheckoutResponse } from "./DTO";

export class CheckoutController implements IController<CheckoutRequest, CheckoutResponse>{
    constructor(
        readonly useCase: CheckoutUseCase
    ){}
    
    async handle(request: CheckoutRequest): Promise<HttpResponse<CheckoutResponse>> {
        const response = await this.useCase.execute(request);
        return Ok(response);
    }

    formatData(request: CheckoutRequest) : CheckoutRequest {
        return request;
    }
}