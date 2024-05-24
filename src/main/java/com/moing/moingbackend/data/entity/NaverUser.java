package com.moing.moingbackend.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Table(name="NaverUser")


public class NaverUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long naver_id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String naverEmail;
}
