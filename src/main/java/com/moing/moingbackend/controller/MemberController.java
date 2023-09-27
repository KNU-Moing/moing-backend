package com.moing.moingbackend.controller;

import com.moing.moingbackend.data.dto.MailDto;
import com.moing.moingbackend.data.service.MailService;
import com.moing.moingbackend.data.service.MemberService;
import com.moing.moingbackend.data.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.transaction.Transactional;

@Controller
public class MemberController {

    private final MemberService ms;

    @Autowired
    public MemberController(MemberService ms) {
        this.ms = ms;
    }

    // 이메일 보내기
    @Transactional
    @GetMapping("/sendEmail")
    public String sendEmail(@RequestParam("email") String email){
        MailDto dto = ms.createMailAndChangePassword(email);
        ms.mailSend(dto);

        return "/member/login";
    }
}
