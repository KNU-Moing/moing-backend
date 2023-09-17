package com.moing.moingbackend.data.dto;


public class ChangeQuestionDto {

    private Long id;

    private String content;

    public ChangeQuestionDto(Long id, String content) {
        this.id = id;
        this.content = content;
    }

    public ChangeQuestionDto() {
    }

    public Long getId() {
        return this.id;
    }

    public String getContent() {
        return this.content;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setContent(String content) {
        this.content = content;
    }

}
