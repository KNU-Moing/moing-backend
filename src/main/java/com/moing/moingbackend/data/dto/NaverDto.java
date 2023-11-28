package com.moing.moingbackend.data.dto;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.util.UriComponentsBuilder;

@Data
@Configuration
@ConfigurationProperties(prefix = "naver")
public class NaverDto {
    private String requestTokenUri= "https://nid.naver.com/oauth2.0/token";
    private String clientId = "aOXD3J2PygfcljZ6tFog";
    private String clientSecret = "IhhDZ5f_Qo";

    public String getRequestURL(String code) {
        return UriComponentsBuilder.fromHttpUrl(requestTokenUri)
                .queryParam("grant_type", "authorization_code")
                .queryParam("client_id", clientId)
                .queryParam("client_secret", clientSecret)
                .queryParam("code", code)
                .toUriString();
    }
}
