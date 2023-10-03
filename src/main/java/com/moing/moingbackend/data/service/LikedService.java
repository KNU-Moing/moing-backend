package com.moing.moingbackend.data.service;

import com.moing.moingbackend.data.dto.QuestionResponseDto;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface LikedService {
    void likedCommunity(HttpServletRequest servletRequest,
                      HttpServletResponse servletResponse, Long id);

    void deleteLikedCommunity(HttpServletRequest servletRequest,
                            HttpServletResponse servletResponse,
                            Long id);

    int countLikedCommunityByUser(HttpServletRequest servletRequest,
                                 HttpServletResponse servletResponse);

    List<QuestionResponseDto> getLikedCommunity(HttpServletRequest servletRequest,
                                                  HttpServletResponse servletResponse);
}