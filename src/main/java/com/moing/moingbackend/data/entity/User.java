package com.moing.moingbackend.data.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
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
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    @Column(nullable = false)
    private String username;  //이름

    @Column(nullable = true, unique = true)
    private String account;  //id
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate pregnancyDate;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = true)
    private String password;
    @Column(nullable = false)
    private String birthday;
    @Column(nullable = false, unique = true)
    private String nickname;  //닉네임
    @Column(nullable = false)
    private String phoneNumber;
    @Column(nullable = false)
    private String week; //임신주차
    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();

    public Long getId() {
        return user_id;
    }

}
