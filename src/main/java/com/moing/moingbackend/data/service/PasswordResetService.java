package com.moing.moingbackend.data.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class PasswordResetService {

    private final JavaMailSender javaMailSender;

    @Autowired
    public PasswordResetService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendPasswordResetEmail(String toEmail, String temporaryPassword) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("비밀번호 초기화");
        message.setText("임시 비밀번호: " + temporaryPassword);

        javaMailSender.send(message);
    }
}

