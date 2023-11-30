package com.moing.moingbackend.data.service;

import com.moing.moingbackend.data.dto.NaverUserResponse;
import com.moing.moingbackend.data.entity.NaverUser;


public interface NaverLoginService {
    NaverUser toEntityUser(String code);

    String toRequestAccessToken(String code);

    NaverUserResponse.NaverUserDetail toRequestProfile(String accessToken);
}
