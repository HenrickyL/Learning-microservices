package com.henricky.accounts.dto;

import com.henricky.accounts.enums.AccountTypeEnum;
import lombok.Data;

@Data
public class AccountDto {
    private Long accountNumber;
    private AccountTypeEnum accountType;
    private String branchAddress;
}
