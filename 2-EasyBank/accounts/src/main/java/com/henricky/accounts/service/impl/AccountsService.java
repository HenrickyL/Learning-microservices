package com.henricky.accounts.service.impl;

import com.henricky.accounts.constants.AccountsConstants;
import com.henricky.accounts.dto.CustomerDto;
import com.henricky.accounts.entity.Account;
import com.henricky.accounts.entity.Customer;
import com.henricky.accounts.enums.AccountTypeEnum;
import com.henricky.accounts.exception.BadRequestException;
import com.henricky.accounts.mapper.CustomerMapper;
import com.henricky.accounts.repository.AccountRepository;
import com.henricky.accounts.repository.CustomerRepository;
import com.henricky.accounts.service.IAccountsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
@AllArgsConstructor
public class AccountsService implements IAccountsService {
    private  AccountRepository accountRepository;
    private  CustomerRepository customerRepository;

//    @Autowired
//    public AccountsService(AccountRepository accountRepository, CustomerRepository customerRepository){
//        this.accountRepository = accountRepository;
//        this.customerRepository = customerRepository;
//    }

    @Override
    public void createAccount(CustomerDto customerDto) {
        String mobileNumber = customerDto.getMobileNumber();
        Optional<Customer> optionalCustomer = customerRepository.findByMobileNumber(mobileNumber);

        if(optionalCustomer.isPresent()){
            throw new BadRequestException("Custumer already registered with given mobile number "+mobileNumber);
        }

        Customer customer = CustomerMapper.mapToEntity(customerDto, new Customer());
        customer.setCreatedBy("Anonymous");
        customer.setCreatedAt(LocalDateTime.now());
        Customer customerSaved = customerRepository.save(customer);
        accountRepository.save(createNewAccount(customerSaved));
    }

    private Account createNewAccount(Customer customer){
        Account newAccount = new Account();
        newAccount.setCustomerId(customer.getCustomerId());
        long randomAccNumber = 1000000000L + new Random().nextInt(900000000);
        newAccount.setAccountNumber(randomAccNumber);
        newAccount.setAccountType(AccountTypeEnum.SAVINGS.toString());
        newAccount.setBranchAddress(AccountsConstants.ADDRESS);
        newAccount.setCreatedBy("Anonymous");
        newAccount.setCreatedAt(LocalDateTime.now());
        return newAccount;
    }
}
