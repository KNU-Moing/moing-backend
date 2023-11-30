package com.moing.moingbackend.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="sumone")
public class Sumone extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String question;
    @Column(nullable = false)
    private String answer;

    @ManyToOne
    @JoinColumn(name = "uid")
    @ToString.Exclude
    private User user;
}
