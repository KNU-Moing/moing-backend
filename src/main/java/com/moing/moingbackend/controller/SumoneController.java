package com.moing.moingbackend.controller;

import com.moing.moingbackend.config.secutiry.JwtTokenProvider;
import com.moing.moingbackend.data.dto.SumoneDto;
import com.moing.moingbackend.data.service.SumoneService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/sumone")
public class SumoneController {
    private final SumoneService sumoneService;
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public SumoneController(SumoneService sumoneService,JwtTokenProvider jwtTokenProvider){
        this.sumoneService = sumoneService;
        this.jwtTokenProvider = jwtTokenProvider;
    }    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping(value = "/{id}")
    public ResponseEntity<SumoneDto> getSumone(@PathVariable Long id, HttpServletRequest servletRequest,
                                                 HttpServletResponse servletResponse){

        SumoneDto selectedSumoneDto = sumoneService.getSumone(id, servletRequest, servletResponse);
        return ResponseEntity.status(HttpStatus.OK).body(selectedSumoneDto);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PostMapping()
    public ResponseEntity<SumoneDto> createSumone(@RequestBody SumoneDto sumoneDto, HttpServletRequest servletRequest,
                                              HttpServletResponse servletResponse){

        sumoneService.saveSumone(sumoneDto, servletRequest, servletResponse);

        return ResponseEntity.status(HttpStatus.OK).body(sumoneDto);

    }

}
