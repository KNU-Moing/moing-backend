package com.moing.moingbackend.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long article_id; //질문 키 매핑
    private Long user_id; // 유저 키 매핑
    @Column(nullable = false)
    private String answer;

//    @OneToOne
//    @JoinColumn(name = "question_id", referencedColumnName = "id")
//    private Question question;

}