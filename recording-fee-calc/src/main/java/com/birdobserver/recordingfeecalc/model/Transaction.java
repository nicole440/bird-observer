package com.birdobserver.recordingfeecalc.model;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public class Transaction {
    private UUID transactionId;
//    private List documentIds;
    private BigDecimal total;

    public Transaction(UUID transactionId, List documentIds, BigDecimal total) {
        this.transactionId = UUID.randomUUID();
        this.documentIds = documentIds;
        this.total = total;
    }

    public UUID getTransactionId() {
        return this.transactionId;
    }

    public void setTransactionId(UUID transactionId) {
        this.transactionId = UUID.randomUUID();
    }

    public List getDocumentIds() {
        return documentIds;
    }

    public void setDocumentIds(List documentIds) {
        this.documentIds = documentIds;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }
}
