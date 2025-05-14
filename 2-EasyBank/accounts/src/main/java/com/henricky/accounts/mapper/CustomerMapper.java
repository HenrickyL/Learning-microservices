package com.henricky.accounts.mapper;

import com.henricky.accounts.dto.CustomerDto;
import com.henricky.accounts.entity.Customer;

public class CustomerMapper {
    public static CustomerDto mapToDto(Customer target, CustomerDto response){
        response.setName(target.getName());
        response.setEmail(target.getEmail());
        response.setMobileNumber(target.getMobileNumber());
        return response;
    }

    public static Customer mapToEntity(CustomerDto target, Customer response){
        response.setName(target.getName());
        response.setEmail(target.getEmail());
        response.setMobileNumber(target.getMobileNumber());
        return response;
    }
}
