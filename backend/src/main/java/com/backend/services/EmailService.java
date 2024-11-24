package com.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.backend.models.Email;


@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    public String sendEmail( Email email) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("tomas.pascal.dev@gmail.com");
            String subject = email.getSubject() + " FROM: " + email.getSenderName() + " " + email.getSenderEmail();
            message.setSubject(subject);
            message.setText(email.getBody());

            mailSender.send(message);
            return "OK";
        } catch (Exception e) {
            return "ERROR: " + e.getMessage();
        }
    }
}
