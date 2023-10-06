package com.moing.moingbackend.controller;

import com.moing.moingbackend.data.dto.QuestionResponseDto;
import com.moing.moingbackend.data.dto.RequestLikedDto;
import com.moing.moingbackend.data.service.LikedService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("liked")
public class LikedController {

    private final LikedService likedService;

    @Autowired
    public LikedController(LikedService likedService){
        this.likedService = likedService;

    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PostMapping()
    public void likedCommunity(HttpServletRequest servletRequest,
                               HttpServletResponse servletResponse,
                               @RequestBody RequestLikedDto requestLikedDto){
        likedService.likedCommunity(servletRequest, servletResponse,requestLikedDto.getId());
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @DeleteMapping()
    public void unLikedCommunity(HttpServletRequest servletRequest,
                               HttpServletResponse servletResponse,
                               @RequestBody RequestLikedDto requestLikedDto){
        likedService.deleteLikedCommunity(servletRequest, servletResponse,requestLikedDto.getId());
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping("/count")
    public ResponseEntity<Integer> countLikedCommunity(HttpServletRequest servletRequest,
                                                     HttpServletResponse servletResponse){
        int likeCount = likedService.countLikedCommunityByUser(servletRequest,servletResponse);
        return ResponseEntity.ok(likeCount);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping("/list")
    public ResponseEntity<List<QuestionResponseDto>> getLikedCommunity(HttpServletRequest servletRequest,
                                                                 HttpServletResponse servletResponse){
        List<QuestionResponseDto> questionResponseDto =
                likedService.getLikedCommunity(servletRequest,servletResponse);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body(questionResponseDto);
    }
}
