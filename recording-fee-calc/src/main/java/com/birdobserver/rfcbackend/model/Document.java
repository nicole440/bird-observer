package com.birdobserver.rfcbackend.model;

import java.math.BigDecimal;
import java.util.Map;

public class Document {
    private int documentId;
    private String documentType;
    private int pageCount;
    private boolean eRecording;
    private Map<String, BigDecimal> itemizedFees; // JSON to database
    private BigDecimal totalCharge;

    public Document(int documentId, String documentType, int pageCount, boolean eRecording, Map<String, BigDecimal> itemizedFees, BigDecimal totalCharge) {
        this.documentId = documentId;
        this.documentType = documentType;
        this.pageCount = pageCount;
        this.eRecording = eRecording;
        this.itemizedFees = itemizedFees;
        this.totalCharge = totalCharge;
    }

    public int getDocumentId() {
        return documentId;
    }

    public void setDocumentId(int documentId) {
        this.documentId = documentId;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public int getPageCount() {
        return pageCount;
    }

    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }

    public boolean getERecording() {
        return eRecording;
    }

    public void setERecording(boolean eRecording) {
        this.eRecording = eRecording;
    }

    public Map<String, BigDecimal> getItemizedFees() {
        return itemizedFees;
    }

    public void setItemizedFees(Map<String, BigDecimal> itemizedFees) {
        this.itemizedFees = itemizedFees;
    }

    public BigDecimal getTotalCharge() {
        return totalCharge;
    }

    public void setTotalCharge(BigDecimal totalCharge) {
        this.totalCharge = totalCharge;
    }
}
