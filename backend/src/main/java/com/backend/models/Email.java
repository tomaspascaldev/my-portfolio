package com.backend.models;

public class Email {
    private String senderEmail;
    private String senderName;
    private String subject;
    private String body;

    public Email () {}

    public Email (String senderEmail, String senderName, String subject, String body) {
        this.senderEmail = senderEmail;
        this.senderName = senderName;
        this.subject = subject;
        this.body = body;
    }
    
    public String getSenderEmail () {
        return this.senderEmail;
    }

    public void setSenderEmail (String senderEmail) {
        this.senderEmail = senderEmail;
    }

    public String getSenderName() {
        return this.senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getSubject () {
        return this.subject;
    }

    public void setSubject (String subject) {
        this.subject = subject;
    }

    public String getBody () {
        return this.body;
    }

    public void setBody (String body) {
        this.body = body;
    }

}
