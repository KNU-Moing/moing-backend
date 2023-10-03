package com.moing.moingbackend.data.service.impl;

import com.moing.moingbackend.common.CommonResponse;
import com.moing.moingbackend.config.JwtUtils;
import com.moing.moingbackend.config.secutiry.JwtTokenProvider;
import com.moing.moingbackend.data.dto.SignInResultDto;
import com.moing.moingbackend.data.dto.SignUpResultDto;
import com.moing.moingbackend.data.dto.UserDto;
import com.moing.moingbackend.data.entity.User;
import com.moing.moingbackend.data.repository.UserRepository;
import com.moing.moingbackend.data.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;

@Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }
    public List<User> getUserList() {
        return userRepository.findAll();
    }

    public UserDto getUserById(Long id) {
        Optional<User> User = userRepository.findById(id);
        if (User == null) {
            return null;
        }
        UserDto UserResponse = new UserDto();

        UserResponse.getUser_id();
        UserResponse.getPassword();
        UserResponse.getAccount();
        UserResponse.getEmail();
        UserResponse.getPregnancyDate();
        UserResponse.getBirthday();
        UserResponse.getNickname();
        UserResponse.getUsername();
        UserResponse.getPhoneNumber();
        UserResponse.getRoles();

        return UserResponse;
    }

    @Override
    public SignUpResultDto signUp(String account, String password, String username, String email, LocalDate pregnancyDate, String birthday, String nickname, String phoneNumber, String role) {
        LOGGER.info("[getSignUpResult] 회원 가입 정보 전달");
        User user;
        if (role.equalsIgnoreCase("ADMIN")) {
            user = User.builder()
                    .username(username)
                    .email(email)
                    .pregnancyDate(pregnancyDate)
                    .account(account)
                    .birthday(birthday)
                    .nickname(nickname)
                    .phoneNumber(phoneNumber)
                    .password(passwordEncoder.encode(password))
                    .roles(Collections.singletonList("ROLE_ADMIN"))
                    .build();
        } else {
            user = User.builder()
                    .username(username)
                    .email(email)
                    .account(account)
                    .pregnancyDate(pregnancyDate)
                    .birthday(birthday)
                    .nickname(nickname)
                    .phoneNumber(phoneNumber)
                    .password(passwordEncoder.encode(password))
                    .roles(Collections.singletonList("ROLE_USER"))
                    .build();
     }

        User savedUser = userRepository.save(user);
        SignUpResultDto signUpResultDto = new SignInResultDto();

        LOGGER.info("[getSignUpResult] userEntity 값이 들어왔는지 확인 후 결과값 주입");
        if (!savedUser.getUsername().isEmpty()) {
            LOGGER.info("[getSignUpResult] 정상 처리 완료");
            setSuccessResult(signUpResultDto);
        } else {
            LOGGER.info("[getSignUpResult] 실패 처리 완료");
            setFailResult(signUpResultDto);
        }
        return signUpResultDto;
    }

    @Override
    public SignInResultDto signIn(String account, String password) throws RuntimeException {


        LOGGER.info("[getSignInResult] signDataHandler 로 회원 정보 요청");
        User user = userRepository.getByAccount(account);
        LOGGER.info("[getSignInResult] Id : {}", account);

        LOGGER.info("[getSignInResult] 패스워드 비교 수행");
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException();
        }
        LOGGER.info("[getSignInResult] 패스워드 일치");

        LOGGER.info("[getSignInResult] SignInResultDto 객체 생성");
        SignInResultDto signInResultDto = SignInResultDto.builder()
                .token(jwtTokenProvider.createToken(String.valueOf(user.getUser_id()),
                        user.getRoles(), user.getAccount()))
                .name(user.getUsername())
                .build();

        LOGGER.info("[getSignInResult] SignInResultDto 객체에 값 주입");
        setSuccessResult(signInResultDto);


        return signInResultDto;
    }
    private void setSuccessResult(SignUpResultDto result) {
        result.setSuccess(true);
        result.setCode(CommonResponse.SUCCESS.getCode());
        result.setMsg(CommonResponse.SUCCESS.getMsg());
    }

    // 결과 모델에 api 요청 실패 데이터를 세팅해주는 메소드
    private void setFailResult(SignUpResultDto result) {
        result.setSuccess(false);
        result.setCode(CommonResponse.FAIL.getCode());
        result.setMsg(CommonResponse.FAIL.getMsg());
    }

    public void withdraw(Long id) { // 회원 탈퇴
        userRepository.deleteById(id);
    }

    public PasswordEncoder passwordEncoder() {
        return this.passwordEncoder;
    }
}