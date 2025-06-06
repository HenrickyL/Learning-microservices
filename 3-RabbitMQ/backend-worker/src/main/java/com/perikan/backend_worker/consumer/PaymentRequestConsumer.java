package com.perikan.backend_worker.consumer;

import com.perikan.backend_worker.producer.PaymentErrorProducer;
import com.perikan.backend_worker.producer.PaymentSuccessProducer;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class PaymentRequestConsumer {
    @Autowired private PaymentErrorProducer errorProducer;
    @Autowired private PaymentSuccessProducer successProducer;



    @RabbitListener(queues = "payment-request-queue")
    public void receiveMessage(@Payload Message message){
        System.out.println(message);
        if(new Random().nextBoolean()){
            successProducer.generateResponse("Sucesso no pagamento: "+ message);
        }else{
            errorProducer.generateResponse("Sucesso no pagamento: "+ message);
        }
    }
}
