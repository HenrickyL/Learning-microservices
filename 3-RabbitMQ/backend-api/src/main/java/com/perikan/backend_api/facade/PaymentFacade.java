package com.perikan.backend_api.facade;


import com.perikan.backend_api.dto.PaymentDto;
import org.springframework.stereotype.Service;

@Service
public class PaymentFacade {
    public String requestPayment(PaymentDto request){
        return "Pagamento Aguardando Confirmação";
    }
}
