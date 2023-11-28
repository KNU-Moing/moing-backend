package com.moing.moingbackend.data.entity;

import lombok.*;

import javax.persistence.*;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="careCenter")
public class CareCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;  //업체명
    @Column(nullable = false)
    private String region; // 지역
    @Column(nullable = false)
    private String num;  //사업자등록 번호
    @Column(nullable = false)
    private String address;  //주소
    @Column(nullable = false)
    private String addressNum;  //우편번호
    @Column(nullable = false)
    private String tel;        //전화번호
    @Column(nullable = false)
    private String introduction;  //업체 소개



}
