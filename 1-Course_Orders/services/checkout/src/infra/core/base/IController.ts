import { HttpResponse } from "../httpResponse"

export interface IController<REQ, RES>{
    handle(request: REQ): Promise<HttpResponse<RES>>
    formatData(request: REQ): REQ
}