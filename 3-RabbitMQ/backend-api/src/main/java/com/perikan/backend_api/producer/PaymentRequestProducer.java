package com.perikan.backend_api.producer;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.perikan.backend_api.dto.PaymentDto;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PaymentRequestProducer {
    @Autowired private AmqpTemplate amqpTemplate;

    //serialize
    private final ObjectMapper objectMapper = new ObjectMapper();

    public void integrate(PaymentDto payment) throws JsonProcessingException {
        amqpTemplate.convertAndSend(
                "payment-request-exchange",
                "payment-request-rout-key",
                objectMapper.writeValueAsString(payment)
        );
    }
}
