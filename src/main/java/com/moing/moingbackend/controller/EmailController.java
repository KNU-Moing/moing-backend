package com.moing.moingbackend.controller;

import com.moing.moingbackend.data.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    private final MailService emailService;

    @Autowired
    public EmailController(MailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping("/send-email")
    public String sendEmail(@RequestParam("email") String email) {

        String subject = "Hello";
        String text = "This is a test email.";

        emailService.sendEmail(email, subject, text);

        return "Email sent successfully!";
    }
}
