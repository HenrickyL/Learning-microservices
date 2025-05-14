package com.henricky.accounts.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Account extends  BaseEntity{
    @Column(name = "customer_id")
    private Long customerId;

    @Id
    @Column(name="account_number")
    private Long AccountNumber;

    @Column(name="account_type")
    private String accountType;

    @Column(name= "branch_address")
    private String branchAddress;

}
