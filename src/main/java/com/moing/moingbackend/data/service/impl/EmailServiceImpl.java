package com.moing.moingbackend.data.service.impl;

import java.io.UnsupportedEncodingException;
import java.util.Properties;
import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.Random;

import javax.mail.Message.RecipientType;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl{

    @Autowired
    JavaMailSender emailSender;
    private static final String FROM_EMAIL = "knulikelion11@gmail.com";
    private static final String FROM_NAME = "MOING";
    private static final String GMAIL_PASSWORD = "gjkw cgln tgen wmth";
    public static final String ePw = createKey();
    // 이메일 설정
    public String sendEmail(String to) throws Exception {
        // 생성된 인증 코드
        String ePw = createKey();

        MimeMessage message = createMessage(to, ePw);
        try {
            emailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
            throw new IllegalArgumentException("이메일 보내기 실패");
        }
        return ePw;
    }

    private MimeMessage createMessage(String to, String ePw) throws Exception {
        MimeMessage message = emailSender.createMimeMessage();

        message.addRecipients(RecipientType.TO, to); // 받는 대상
        message.setSubject("MOING 회원가입 이메일 인증"); // 제목

        String msg = "<div style='margin:100px;'>";
        msg += "<h1>안녕하세요 MOING입니다.</h1>";
        msg += "<br>";
        msg += "<p>아래 코드를 회원가입 창으로 돌아가 입력해주세요</p>";
        msg += "<br>";
        msg += "<p>감사합니다!</p>";
        msg += "<br>";
        msg += "<div align='center' style='border:1px solid black; font-family:verdana';>";
        msg += "<h3 style='color:blue;'>회원가입 인증 코드입니다.</h3>";
        msg += "<div style='font-size:130%'>";
        msg += "CODE : <strong>" + ePw + "</strong><div><br/> ";
        msg += "</div>";

        message.setText(msg, "utf-8", "html"); // 내용
        message.setFrom(new InternetAddress(FROM_EMAIL, FROM_NAME)); // 보내는 사람

        return message;
    }

    public static String createKey() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for (int i = 0; i < 8; i++) { // 인증코드 8자리
            int index = rnd.nextInt(3); // 0~2 까지 랜덤

            switch (index) {
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97));
                    //  a~z  (ex. 1+97=98 => (char)98 = 'b')
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65));
                    //  A~Z
                    break;
                case 2:
                    key.append((rnd.nextInt(10)));
                    // 0~9
                    break;
            }
        }

        return key.toString();
    }
}
