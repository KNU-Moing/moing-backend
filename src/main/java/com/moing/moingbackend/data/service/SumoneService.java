package com.moing.moingbackend.data.service;

import com.moing.moingbackend.data.dto.SumoneDto;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface SumoneService {

    SumoneDto getSumone(Long id, HttpServletRequest servletRequest,
                        HttpServletResponse servletResponse);
    void saveSumone(SumoneDto sumoneDto,HttpServletRequest servletRequest,
                  HttpServletResponse servletResponse);
}
