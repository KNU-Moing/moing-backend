package com.moing.moingbackend.controller;


import com.moing.moingbackend.data.entity.NaverUser;
import com.moing.moingbackend.data.service.NaverLoginService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class NaverController {
    private final NaverLoginService naverLoginService;
    private  final Logger logger = LoggerFactory.getLogger(NaverController.class);


    public NaverController(NaverLoginService naverLoginService) {
        this.naverLoginService = naverLoginService;
    }

    @GetMapping("/user/login/naver")
    public ResponseEntity<NaverUser> loginByNaver(@RequestParam(name = "code") String code) {

        //NaverUserResponse.NaverUserDetail naverUserResponse = naverLoginService.toEntityUser(code);
       // return ResponseEntity.status(HttpStatus.OK).body(naverUserResponse);

      // String token = naverLoginService.toRequestAccessToken(code);
       //logger.info("Access Token: " + token);


        return ResponseEntity.status(HttpStatus.OK).body(naverLoginService.toEntityUser(code));

    }
}
