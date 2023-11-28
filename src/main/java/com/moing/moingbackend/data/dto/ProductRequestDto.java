package com.moing.moingbackend.data.dto;

import lombok.Data;

@Data
public class ProductRequestDto {
    private String title;
    private String link;
    private String image;
    private int lprice;
}
