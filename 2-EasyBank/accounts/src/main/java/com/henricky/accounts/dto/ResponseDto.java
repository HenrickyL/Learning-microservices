package com.henricky.accounts.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
@AllArgsConstructor
public class ResponseDto {
    private String statusCode;
    private String statusMessage;

//    public ResponseDto(String status, String message){
//        this.statusCode = status;
//        this.statusMessage = message;
//    }
}
