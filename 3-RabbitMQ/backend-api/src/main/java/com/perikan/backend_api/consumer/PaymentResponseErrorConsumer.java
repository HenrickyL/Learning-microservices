package com.perikan.backend_api.consumer;

import com.perikan.backend_api.facade.PaymentFacade;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class PaymentResponseErrorConsumer {
    @Autowired
    private PaymentFacade facade;

    @RabbitListener(queues = {"payment-response-error-queue"})
    public void receive(@Payload Message message){
        String payload = String.valueOf(message.getPayload());
        facade.paymentError(payload);
    }
}
