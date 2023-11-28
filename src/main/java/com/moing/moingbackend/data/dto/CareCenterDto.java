package com.moing.moingbackend.data.dto;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class CareCenterDto {
    private Long id;
    private String name;  //업체명
    private String region; // 지역

    private String num;  //사업자등록 번호
    private String address;  //주소
    private String addressNum;  //우편번호
    private String tel;        //전화번호
    private String introduction;  //업체 소개
}
