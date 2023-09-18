package com.moing.moingbackend.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class QuestionResponseDto {
    private Long id;
    private String author;
    private String title;
    private String content;
    private LocalDateTime modifiedDate;

}