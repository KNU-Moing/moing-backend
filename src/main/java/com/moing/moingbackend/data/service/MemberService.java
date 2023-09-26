package com.moing.moingbackend.data.service;

import com.moing.moingbackend.data.dto.MailDto;
import com.moing.moingbackend.data.repository.MemberPasswordRepository;
import com.moing.moingbackend.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;

@Service
public class MemberService {
    private final UserRepository mr; // mr 주입
    private final MemberPasswordRepository mmr; // mmr 주입
    private final JavaMailSender javaMailSender;
    private final PasswordEncoder passwordEncoder; // PasswordEncoder 주입

    @Autowired
    public MemberService(UserRepository mr, MemberPasswordRepository mmr, JavaMailSender javaMailSender, PasswordEncoder passwordEncoder) {
        this.mr = mr;
        this.mmr = mmr;
        this.javaMailSender = javaMailSender;
        this.passwordEncoder = passwordEncoder; // PasswordEncoder 주입
    }
    // 메일 내용을 생성하고 임시 비밀번호로 회원 비밀번호를 변경
    public MailDto createMailAndChangePassword(String email) {
        String str = getTempPassword();
        MailDto dto = new MailDto();
        dto.setAddress(email);
        dto.setTitle("임시비밀번호 안내 이메일 입니다.");
        dto.setMessage("안녕하세요. 임시비밀번호 안내 관련 이메일 입니다." + " 회원님의 임시 비밀번호는 "
                + str + " 입니다." + "로그인 후에 비밀번호를 변경을 해주세요");
        updatePassword(str,email);
        return dto;
    }

    public void updatePassword(String str, String email){
        String password = str;
        Long user_Id = mr.findByEmail(email).getId();
        mmr.updatePassword(user_Id,password);
    }

    //랜덤함수로 임시비밀번호 구문 만들기

    public String getTempPassword(){
        char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };

        String str = "";

        // 문자 배열 길이의 값을 랜덤으로 10개를 뽑아 구문을 작성함
        int idx = 0;
        for (int i = 0; i < 10; i++) {
            idx = (int) (charSet.length * Math.random());
            str += charSet[idx];
        }
        return str;
    }

    public void mailSend(MailDto mailDTO) {
        System.out.println("전송 완료!");
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mailDTO.getAddress());
        message.setSubject(mailDTO.getTitle());
        message.setText(mailDTO.getMessage());
        message.setFrom("moing@gmail.com");
        message.setReplyTo("moing@gmail.com");
        System.out.println("message"+message);
        javaMailSender.send(message); // mailSender 대신 javaMailSender 사용
    }

    //비밀번호 변경

    public void updatePassWord(String str, String email) {
        String password = passwordEncoder.encode(str); // 비밀번호를 암호화하여 저장
        Long user_Id = mr.findByEmail(email).getId();
        mmr.updatePassword(user_Id, password);
    }
}
