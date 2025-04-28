import { Request, Response } from "express"
import { IController } from '../base/IController';
import { ErrorException } from "../Exception";


export class RouterAdapter<REQUEST, RESPONSE>{
    constructor(
        readonly controller: IController<REQUEST, RESPONSE>
    ){}

    public async handle(request: Request, response: Response) : Promise<Response<RESPONSE, Record<string, any>>>{
        const requestData = {
            ...request.body,
            ...request.params,
            ...request.query,
          }
          try{
            const httpResponse = await this.controller.handle(requestData)
            return response.status(httpResponse.statusCode).json(httpResponse.body)
          }catch(e){
            if(e instanceof ErrorException){
              return response.status(e.statusCode).json({
                type: e.type,
                statusCode: e.statusCode,
                message: e.message,
                error: e.data
              })
            }else{
                const err = e as Error;
                const message: string = err.toString()
                const shortMessage: string = message.split('Argument')[1]
                const isCompleteMessage = shortMessage === undefined || shortMessage.includes('undefined')
                return response.status(500).json({
                    type: 'InternalError',
                    statusCode: 500,
                    error: e,
                    message:isCompleteMessage ?  message  : `Argument: "${message.split('Argument')[1]}"`
                })
            }
          }
    }

}

