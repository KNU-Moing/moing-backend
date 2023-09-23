package com.moing.moingbackend.controller;


import com.moing.moingbackend.data.service.GetUserInfoService;
import com.moing.moingbackend.data.service.RestJsonService;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String home(Model model){
        return "home";
    }

    @GetMapping("/receiveAC")
    public String receiveAC(@RequestParam("code") String code, Model model) {
        RestJsonService restJsonService = new RestJsonService();

        //access_token이 포함된 JSON String을 받아온다.
        String accessTokenJsonData = restJsonService.getAccessTokenJsonData(code);
        if(accessTokenJsonData=="error") return "error";

        //JSON String -> JSON Object
        JSONObject accessTokenJsonObject = new JSONObject(accessTokenJsonData);

        //access_token 추출
        String accessToken = accessTokenJsonObject.get("access_token").toString();


        //유저 정보가 포함된 JSON String을 받아온다.
        GetUserInfoService getUserInfoService = new GetUserInfoService();
        String userInfo = getUserInfoService.getUserInfo(accessToken);

        //JSON String -> JSON Object
        JSONObject userInfoJsonObject = new JSONObject(userInfo);

        //유저의 Email 추출
        JSONObject kakaoAccountJsonObject = (JSONObject)userInfoJsonObject.get("kakao_account");
        String email = kakaoAccountJsonObject.get("email").toString();


        //View에서 사용할 변수 설정
        model.addAttribute("email", email);

        return "success";
    }
}