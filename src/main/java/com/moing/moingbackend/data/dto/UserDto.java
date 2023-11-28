package com.moing.moingbackend.data.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.FetchType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@ToString
@Builder
@Setter
@Getter
@AllArgsConstructor
public class UserDto {

    private Long user_id;
    @NotBlank(message = "이름은 필수 입력 값입니다.")
    private String username;

    @NotEmpty(message = "이메일은 필수 입력 값입니다.")
    @Email(message = "이메일 형식으로 입력해주세요.")
    private String email;
    @NotEmpty(message = "아이디는 필수 입력 값입니다.")
    private String account;
    @NotEmpty(message = "임신일은 필수 입력 값입니다.")
    private LocalDate pregnancyDate;
    @NotEmpty(message = "비밀번호는 필수 입력 값입니다.")
    @Length(min = 4, max = 16, message = "비밀번호는 4자 이상, 16자 이하로 입력해주세요.")
    private String password;
    @NotEmpty(message = "임신주차는 필수 입력 값입니다.")
    private String week;
    private String phoneNumber;
    private String birthday;
    private String nickname;

    private List<String> roles = new ArrayList<>();

}