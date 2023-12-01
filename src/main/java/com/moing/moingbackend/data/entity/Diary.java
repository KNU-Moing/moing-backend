package com.moing.moingbackend.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="diary")
public class Diary extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "uid")
    @ToString.Exclude
    private User user;
    @Column(nullable = false)
    private String image;
    @Column(nullable = false)
    private String weeks;
    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String bloodPressure;
    @Column(nullable = false)
    private String weight;
    @Column(nullable = false)
    private String specialProsecutor;
    @Column(nullable = false)
    private Double babySize;
    @Column(nullable = false)
    private Double babyWeight;
}
