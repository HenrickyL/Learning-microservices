package com.henricky.accounts.mapper;

import com.henricky.accounts.dto.AccountDto;
import com.henricky.accounts.entity.Account;
import com.henricky.accounts.enums.AccountTypeEnum;

public class AccountsMapper {
    public static AccountDto mapToDto(Account target, AccountDto response){
        response.setAccountNumber(target.getAccountNumber());
        response.setAccountType(AccountTypeEnum.valueOf(target.getAccountType()));
        response.setBranchAddress(target.getBranchAddress());
        return response;
    }

    public static Account mapToEntity(AccountDto target, Account response){
        response.setAccountNumber(target.getAccountNumber());
        response.setAccountType(target.getAccountType().toString());
        response.setBranchAddress(target.getBranchAddress());
        return response;
    }
}
