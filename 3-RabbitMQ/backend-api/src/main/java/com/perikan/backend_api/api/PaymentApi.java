package com.perikan.backend_api.api;


import com.perikan.backend_api.dto.PaymentDto;
import com.perikan.backend_api.facade.PaymentFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payment")
public class PaymentApi {
    @Autowired private PaymentFacade facade;

    @PostMapping
    public String processor(@RequestBody PaymentDto request){
        return facade.requestPayment(request);
    }
}
