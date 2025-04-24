import { CourseMapper } from "./CourseMapper"
import { OrderMapper } from "./OrderMapper"

export class Mapper{
    private static _instance: Mapper
    private _courseMapper: CourseMapper
    private _orderMapper: OrderMapper

    private constructor(){
        this._courseMapper = new CourseMapper();
        this._orderMapper = new OrderMapper();
    }

    private static Instance(): Mapper{
        if(!Mapper._instance){
            this._instance = new Mapper();
        }
        return Mapper._instance;
    }
    
    static Course() : CourseMapper{
        return Mapper.Instance()._courseMapper;
    }
    static Order() : OrderMapper{
        return Mapper.Instance()._orderMapper;
    } 
}