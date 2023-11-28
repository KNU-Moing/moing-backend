package com.moing.moingbackend.controller;

import com.moing.moingbackend.data.dto.CareCenterDto;
import com.moing.moingbackend.data.entity.CareCenter;
import com.moing.moingbackend.data.entity.CareCenter;
import com.moing.moingbackend.data.service.CareCenterService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/careCenter")
public class CareCenterController {
    private final CareCenterService careCenterService;
    private final Logger LOGGER = LoggerFactory.getLogger(CareCenterService.class);

    @Autowired
    public CareCenterController(CareCenterService careCenterService) {
        this.careCenterService = careCenterService;
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PostMapping()
    public ResponseEntity<CareCenterDto> createCareCenter(
            @RequestBody CareCenterDto careCenterDto, HttpServletRequest request) {
        CareCenterDto careCenterDtoResponse = careCenterService.saveCareCenter(careCenterDto);

        LOGGER.info("호출 API: " + "create CareCenter" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " + LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body(careCenterDtoResponse);
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping()
    public ResponseEntity<CareCenterDto> getCareCenter(Long id, HttpServletRequest request) {
        CareCenterDto careCenterDtoResponse = careCenterService.getCareCenter(id);

        LOGGER.info("호출 API: " + "get CareCenter" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " + LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body(careCenterDtoResponse);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PutMapping("/{id}")
    public ResponseEntity<CareCenterDto> updateCareCenter(
            @PathVariable Long id,
            @RequestBody CareCenterDto careCenterDto, HttpServletRequest request) throws Exception {

        // CareCenterService를 사용하여 데이터 업데이트
        CareCenterDto updatedCareCenterDto = careCenterService.updateCareCenter(id, careCenterDto);

        LOGGER.info("호출 API: " + "update CareCenter" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " + LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body(updatedCareCenterDto);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @DeleteMapping()
    public ResponseEntity<String> deleteCareCenter(Long id, HttpServletRequest request) throws Exception {
       careCenterService.deleteCareCenter(id);

        LOGGER.info("호출 API: " + "delete CareCenter" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " + LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body("성공적으로 삭제 되었습니다.");
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping("/all")
    public ResponseEntity<List<CareCenter>> getAllCareCenters() {
        List<CareCenter> careCenters = careCenterService.getAllApplications();

        return ResponseEntity.status(HttpStatus.OK).body(careCenters);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping("/name/list")
    public ResponseEntity<List<CareCenter>> nameList(String searchKeyword){

        /*검색기능-3*/
        List<CareCenter> list = null;

        /*searchKeyword = 검색하는 단어*/
        if(searchKeyword == null){
            list =careCenterService.getAllApplications(); //기존의 리스트보여줌
        }else{
            list = careCenterService.careCenterNameSearchList(searchKeyword); //검색리스트반환
        }
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping("/region/list")
    public ResponseEntity<List<CareCenter>> regionList(String searchKeyword){

        /*검색기능-3*/
        List<CareCenter> list = null;

        /*searchKeyword = 검색하는 단어*/
        if(searchKeyword == null){
            list =careCenterService.getAllApplications(); //기존의 리스트보여줌
        }else{
            list = careCenterService.careCenterRegionSearchList(searchKeyword); //검색리스트반환
        }
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
}
