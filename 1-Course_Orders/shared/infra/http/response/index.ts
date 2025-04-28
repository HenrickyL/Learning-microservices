interface HttpResponseData<T = any> {
    statusCode: number
    body: T | null
}

export{
    HttpResponseData,
    HttpResponse
}

abstract class HttpResponse{
    public static Ok<T>(dto:T):HttpResponseData<T>{
      return {
        statusCode:200,
        body:dto
      }
    }

    public static Created<T>(dto: T | null = null): HttpResponseData<T> {
      return {
        statusCode: 201,
        body: dto,
      }
  }

  public static NoContent(): HttpResponseData<void> {
    return {
      statusCode: 204,
      body: null,
    }
  }
}



