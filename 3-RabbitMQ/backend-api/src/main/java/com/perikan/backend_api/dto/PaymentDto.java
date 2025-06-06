package com.perikan.backend_api.dto;

import java.math.BigDecimal;
import lombok.Data;

@Data
public class PaymentDto {
    private String orderNumber;
    private BigDecimal value;
    private String order;
}
