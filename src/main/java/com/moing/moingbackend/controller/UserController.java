package com.moing.moingbackend.controller;

import com.moing.moingbackend.data.dto.SignInResultDto;
import com.moing.moingbackend.data.dto.SignUpResultDto;
import com.moing.moingbackend.data.dto.UserDto;
import com.moing.moingbackend.data.entity.User;
import com.moing.moingbackend.data.repository.UserRepository;
import com.moing.moingbackend.data.service.UserService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    @PostMapping(value = "/sign-in")
    public SignInResultDto signIn(
            @ApiParam(value = "ID", required = true) @RequestParam String id,
            @ApiParam(value = "Password", required = true) @RequestParam String password)
            throws RuntimeException {
        LOGGER.info("[signIn] 로그인을 시도하고 있습니다. id : {}, pw : ****", id);
        SignInResultDto signInResultDto = userService.signIn(id, password);

        if (signInResultDto.getCode() == 0) {

            LOGGER.info("[signIn] 정상적으로 로그인되었습니다. name : {}, id : {}, token : {}", signInResultDto.getName(), id,
                    signInResultDto.getToken());
        }
        return signInResultDto;
    }

    @PostMapping(value = "/sign-up")
    public SignUpResultDto signUp(
            @ApiParam(value = "ID", required = true) @RequestParam String account,
            @ApiParam(value = "비밀번호", required = true) @RequestParam String password,
            @ApiParam(value = "이름", required = true) @RequestParam String username,
            @ApiParam(value = "이메일", required = true) @RequestParam String email,
            @ApiParam(value = "임신일", required = true) @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate pregnancyDate,
            @ApiParam(value = "생년월일", required = true) @RequestParam String birthday,
            @ApiParam(value = "닉네임", required = true) @RequestParam String nickname,
            @ApiParam(value = "핸드폰번호", required = true) @RequestParam String phoneNumber,
            @ApiParam(value = "권한", required = true) @RequestParam String role) {

        // 현재 날짜를 가져옵니다.
        LocalDate currentDate = LocalDate.now();

        // 임신 시작일로부터 현재 날짜까지의 기간을 계산합니다.
        long days = ChronoUnit.DAYS.between(pregnancyDate, currentDate);

        // 일 단위로 계산한 값을 7로 나누어 전체 주차를 계산합니다.
        int calculatedWeek = (int) (days / 7);

        // 계산된 주차를 week에 설정합니다.
        String week = String.valueOf(calculatedWeek);
        LOGGER.info("[signUp] 회원가입을 수행합니다. id : {}, password : ****, name : {}, role : {}, phonenumber : {}, week : {}", account,
                username, role, phoneNumber, week);
        SignUpResultDto signUpResultDto = userService.signUp(account, password, username, email, week, pregnancyDate, birthday, nickname, phoneNumber,role);

        LOGGER.info("[signUp] 회원가입을 완료했습니다. id : {}", account);
        return signUpResultDto;
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PostMapping(value = "/logout")
    public ResponseEntity<Map<String, String>> logout(HttpServletRequest request, HttpServletResponse response) {
        // 로그아웃 처리 로직을 여기에 작성합니다.

        // Spring Security에 의한 인증을 로그아웃 처리
        SecurityContextHolder.clearContext(); // 세션 무효화

        // 쿠키 삭제 (Optional, 기존에 설정한 deleteCookies에 포함되어 있음)
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                cookie.setMaxAge(0);
                response.addCookie(cookie);
            }
        }

        Map<String, String> map = new HashMap<>();
        map.put("message", "로그아웃이 성공적으로 처리되었습니다.");

        return ResponseEntity.ok(map);
    }

}