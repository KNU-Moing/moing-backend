package com.moing.moingbackend.data.repository;

import com.moing.moingbackend.data.entity.CareCenter;
import com.moing.moingbackend.data.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CareCenterRepository extends JpaRepository<CareCenter, Long> {
    List<CareCenter> findByNameContaining(String searchKeyword);
    List<CareCenter> findByRegionContaining(String searchKeyword);
}
