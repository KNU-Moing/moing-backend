package com.moing.moingbackend.data.dao.impl;

import com.moing.moingbackend.data.dao.CareCenterDAO;
import com.moing.moingbackend.data.entity.CareCenter;
import com.moing.moingbackend.data.repository.CareCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
@Component
public class CareCenterDAOImpl implements CareCenterDAO {
    private final CareCenterRepository careCenterRepository;
    @Autowired
    public CareCenterDAOImpl(CareCenterRepository careCenterRepository){
        this.careCenterRepository=careCenterRepository;
    }
    @Override
    public CareCenter insertCareCenter(CareCenter careCenter) {
        CareCenter savedCareCenter = careCenterRepository.save(careCenter);
        return savedCareCenter;
    }

    @Override
    public CareCenter selectCareCenter(Long id){
        CareCenter selectedCareCenter;
        if(careCenterRepository.existsById(id)){
            selectedCareCenter = careCenterRepository.getById(id);
        }else{
            selectedCareCenter = new CareCenter();
        }
        return selectedCareCenter;

    }

    @Override
    public CareCenter updateCareCenter(CareCenter careCenter) throws Exception {
        // id로 기존 데이터를 찾아온다.
        Optional<CareCenter> selectCareCenter = careCenterRepository.findById(careCenter.getId());

        // 기존 데이터가 존재하는지 확인한다.
        if (selectCareCenter.isPresent()) {
            CareCenter existingCareCenter = selectCareCenter.get();
            // 수정할 데이터를 설정한다.
            existingCareCenter.setName(careCenter.getName());
//            existingCareCenter.setRegion(careCenter.getRegion());

            // 수정된 데이터를 데이터베이스에 저장한다.
            CareCenter updatedCareCenter = careCenterRepository.save(existingCareCenter);

            return updatedCareCenter;
        } else {
            throw new Exception("해당 id에 해당하는 데이터가 존재하지 않습니다.");
        }
    }
    @Override
    public void deleteCareCenter(Long id) throws Exception {
        Optional<CareCenter> selectedCareCenter = careCenterRepository.findById(id);
        if(selectedCareCenter.isPresent()){
            CareCenter careCenter = selectedCareCenter.get();
            careCenterRepository.delete(careCenter);
        }else{
            throw new Exception();
        }

    }
    @Override
    public List<CareCenter> getAllApplications() {
        return careCenterRepository.findAll();
    }
}
