package com.perikan.backend_api.facade;


import com.perikan.backend_api.dto.PaymentDto;
import com.perikan.backend_api.producer.PaymentRequestProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentFacade {
    @Autowired private PaymentRequestProducer producer;

    public String requestPayment(PaymentDto request){
        try {
            producer.integrate(request);
        } catch (Exception e) {
            return "Ocorreu um erro ao solicitar pagamento .." + e.getMessage();
        }
        return "Pagamento Aguardando Confirmação";
    }
}
