package com.backend.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.beans.factory.annotation.Autowired;

import com.backend.services.EmailService;
import com.backend.models.Email;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

    private EmailService emailService;

    @Autowired
    public void EmailService(EmailService emailService){
        this.emailService = emailService;
    } 

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody Email email){
        return emailService.sendEmail(email);
        // return "OK";
    }

}
