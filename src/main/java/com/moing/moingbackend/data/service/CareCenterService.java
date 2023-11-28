package com.moing.moingbackend.data.service;

import com.moing.moingbackend.data.dto.CareCenterDto;
import com.moing.moingbackend.data.entity.CareCenter;
import com.moing.moingbackend.data.entity.Question;

import java.util.List;

public interface CareCenterService {
    CareCenterDto getCareCenter(Long id);
    CareCenterDto saveCareCenter(CareCenterDto careCenterDto);
    CareCenterDto updateCareCenter(Long id, CareCenterDto careCenterDto) throws Exception;
    void deleteCareCenter(Long id) throws Exception;
    List<CareCenter> getAllApplications();
    List<CareCenter> careCenterNameSearchList(String searchKeyword);
    List<CareCenter> careCenterRegionSearchList(String searchKeyword);
}
