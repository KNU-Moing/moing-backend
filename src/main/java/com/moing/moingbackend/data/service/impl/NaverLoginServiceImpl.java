package com.moing.moingbackend.data.service.impl;


import com.moing.moingbackend.config.secutiry.JwtTokenProvider;
import com.moing.moingbackend.data.dto.NaverDto;
import com.moing.moingbackend.data.dto.NaverTokenResponse;
import com.moing.moingbackend.data.dto.NaverUserResponse;
import com.moing.moingbackend.data.entity.NaverUser;
import com.moing.moingbackend.data.repository.NaverUserRepository;
import com.moing.moingbackend.data.service.NaverLoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service

public class NaverLoginServiceImpl implements NaverLoginService {
    private final RestTemplate restTemplate = new RestTemplate();
    //private final NaverDto naverDto;
    private final NaverUserRepository naverUserRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public  NaverLoginServiceImpl(NaverUserRepository naverUserRepository,
                                  JwtTokenProvider jwtTokenProvider){
        this.naverUserRepository = naverUserRepository;
        this.jwtTokenProvider = jwtTokenProvider;
    }
    @Override
    public NaverUser toEntityUser(String code) {
        String accessToken = toRequestAccessToken(code);
        NaverUserResponse.NaverUserDetail profile = toRequestProfile(accessToken);

        return NaverUser.builder()
                .naverEmail(profile.getEmail())
                .name(profile.getName())
                .build();
    }
    @Override
    public String toRequestAccessToken(String code) {

        NaverDto naverDto = new NaverDto();
        ResponseEntity<NaverTokenResponse> response =
                restTemplate.exchange(naverDto.getRequestURL(code), HttpMethod.GET, null, NaverTokenResponse.class);

        return response.getBody().getAccessToken();
    }
    @Override
    public NaverUserResponse.NaverUserDetail toRequestProfile(String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(headers);

        ResponseEntity<NaverUserResponse> response =
                restTemplate.exchange("https://openapi.naver.com/v1/nid/me", HttpMethod.GET, request, NaverUserResponse.class);



        return response.getBody().getNaverUserDetail();
    }
}
