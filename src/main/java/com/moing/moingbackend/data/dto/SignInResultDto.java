package com.moing.moingbackend.data.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SignInResultDto extends SignUpResultDto {

    private String token;
    private String name;

    @Builder
    public SignInResultDto(boolean success, int code, String msg, String token, String name) {
        super(success, code, msg);
        this.token = token;
        this.name = name;
    }

}
