package com.moing.moingbackend.data.service.impl;

import com.moing.moingbackend.data.dao.CareCenterDAO;
import com.moing.moingbackend.data.dto.CareCenterDto;
import com.moing.moingbackend.data.entity.CareCenter;
import com.moing.moingbackend.data.repository.CareCenterRepository;
import com.moing.moingbackend.data.service.CareCenterService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CareCenterServiceImpl implements CareCenterService {
    private final Logger LOGGER = LoggerFactory.getLogger(CareCenterService.class);

    private final CareCenterDAO careCenterDAO;
    private final CareCenterRepository careCenterRepository;
    @Autowired
    public CareCenterServiceImpl(
            CareCenterDAO careCenterDAO, CareCenterRepository careCenterRepository){
        this.careCenterDAO = careCenterDAO;
        this.careCenterRepository = careCenterRepository;
    }
    @Override
    public CareCenterDto getCareCenter(Long id) {
        CareCenter careCenter = careCenterDAO.selectCareCenter(id);
        if (careCenter == null) {
            return null;
        }
        CareCenterDto careCenterResponse = new CareCenterDto();

        careCenterResponse.setId(careCenter.getId());
        careCenterResponse.setName(careCenter.getName());
        careCenterResponse.setRegion(careCenter.getRegion());
        return careCenterResponse;
    }

    @Override
    public CareCenterDto saveCareCenter(CareCenterDto careCenterDto) {
        CareCenter careCenter = new CareCenter();

        careCenter.setId(careCenterDto.getId());
        careCenter.setName(careCenterDto.getName());
        careCenter.setRegion(careCenterDto.getRegion());

        CareCenter savedCareCenter = careCenterDAO.insertCareCenter(careCenter);
        CareCenterDto careCenterResponse = new CareCenterDto();
        careCenterResponse.setId(savedCareCenter.getId());
        careCenterResponse.setName(savedCareCenter.getName());
        careCenterResponse.setRegion(savedCareCenter.getRegion());

        return careCenterResponse;
    }

    @Override
    public CareCenterDto updateCareCenter(Long id, CareCenterDto careCenterDto) throws Exception {
        // id로 기존 데이터를 찾아온다.
        CareCenter careCenter = careCenterDAO.selectCareCenter(id);

        // 기존 데이터가 존재하는지 확인한다.
        if (careCenter == null) {
            throw new Exception("해당 id에 해당하는 데이터가 존재하지 않습니다.");
        }
        // 수정할 데이터를 설정한다.
        careCenter.setName(careCenterDto.getName());
//        careCenter.setRegion(careCenterDto.getRegion());

        // 수정된 데이터를 데이터베이스에 저장한다.
        CareCenter updatedCareCenter = careCenterDAO.updateCareCenter(careCenter);

        // 수정된 데이터를 DTO로 변환하여 반환한다.
        CareCenterDto updatedCareCenterDto = new CareCenterDto();
        updatedCareCenterDto.setId(updatedCareCenter.getId());
        updatedCareCenterDto.setName(updatedCareCenter.getName());
//        updatedCareCenterDto.setRegion(updatedCareCenter.getRegion());
        return updatedCareCenterDto;
    }

    @Override
    public void deleteCareCenter(Long id) throws Exception {
        careCenterDAO.deleteCareCenter(id);
    }
    @Override
    public List<CareCenter> getAllApplications() {
        return careCenterDAO.getAllApplications();
    }
    @Override
    public List<CareCenter> careCenterNameSearchList(String searchKeyword) {
        return careCenterRepository.findByNameContaining(searchKeyword);    }
    @Override
    public List<CareCenter> careCenterRegionSearchList(String searchKeyword) {
        return careCenterRepository.findByRegionContaining(searchKeyword);    }
}
