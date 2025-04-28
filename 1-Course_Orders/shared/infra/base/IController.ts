import { HttpResponse } from "../http"

export interface IController<REQ, RES>{
    handle(request: REQ): Promise<HttpResponse<RES>>
    formatData(request: REQ): REQ
}