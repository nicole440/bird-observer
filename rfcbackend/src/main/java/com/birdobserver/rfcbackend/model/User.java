package com.birdobserver.rfcbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
import java.util.UUID;

public class User {
    private UUID userId;
    private String username;
    @JsonIgnore
    private String password;
    private List transactions;

    public User(UUID userId, String username, String password, List transactions) {
        this.userId = UUID.randomUUID();;
        this.username = username;
        this.password = password;
        this.transactions = transactions;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List getTransactions() {
        return transactions;
    }

    public void setTransactions(List transactions) {
        this.transactions = transactions;
    }
}
