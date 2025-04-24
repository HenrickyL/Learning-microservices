export interface IController<REQ, RES>{
    handle(request: REQ): Promise<RES>
    formatData(request: REQ): REQ
}