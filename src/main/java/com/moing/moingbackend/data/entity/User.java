package com.moing.moingbackend.data.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
    @Column(nullable = false)
    private String usesrname;
    @Column(nullable = true, unique = true)
    private String account;
    @Column(nullable = false)
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = true)
    private String password;
    @Column(nullable = false)
    private String birthday;
    @Column(nullable = false, unique = true)
    private String nickname;

    private String kakaoId; // 카카오에서 제공하는 사용자 고유 ID
    private String ageRange;

    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();




}
