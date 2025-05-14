package com.henricky.accounts.enums;

public enum AccountTypeEnum {
    SAVINGS("Savings");

    private final String description;

    AccountTypeEnum(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return description;
    }

    public static AccountTypeEnum fromString(String text) {
        for (AccountTypeEnum type : AccountTypeEnum.values()) {
            if (type.description.equalsIgnoreCase(text)) {
                return type;
            }
        }
        throw new IllegalArgumentException("No enum constant for: " + text);
    }
}
