package com.moing.moingbackend.data.dao;

import com.moing.moingbackend.data.entity.CareCenter;

import java.util.List;

public interface CareCenterDAO {
    CareCenter insertCareCenter(CareCenter careCenter);
    CareCenter selectCareCenter(Long id);
    CareCenter updateCareCenter(CareCenter careCenter) throws Exception;
    void deleteCareCenter(Long id) throws Exception;
    List<CareCenter> getAllApplications();
}
