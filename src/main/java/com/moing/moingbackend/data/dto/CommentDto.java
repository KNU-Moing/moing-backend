package com.moing.moingbackend.data.dto;

import lombok.Data;

@Data
public class CommentDto {
    private Long id;
    private Long article_id;
    private Long user_id;
    private String answer;

}
