package com.moing.moingbackend.data.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DiaryDto {
    private Long id;
    private String image;
    private String weeks;
    private String content;
}
