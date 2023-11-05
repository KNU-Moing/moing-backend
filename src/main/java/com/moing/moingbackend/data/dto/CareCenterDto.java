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
    private String name;
    private String region;
}
