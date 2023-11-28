package com.moing.moingbackend.data.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Product extends BaseEntity{
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Column(nullable = false) // 값이 반드시 존재해야 함
    private String title; // 상품명

    @Column(nullable = false)
    private String image; // 상품 이미지

    @Column(nullable = false)
    private String link; // 상품의 구매 링크

    @Column(nullable = false)
    private int lprice; // 상품 가격


/*
    // 관심 상품 생성 시
    public Product(ProductRequestDto requestDto) {
        this.title = requestDto.getTitle();
        this.image = requestDto.getImage();
        this.link = requestDto.getLink();
        this.lprice = requestDto.getLprice();
        this.myprice = 0;
    }

    // 최저가(관심가격) 변경 시
    public void update(ProductMypriceRequestDto requestDto) {
        this.myprice = requestDto.getMyprice();
    }

    // 예약된 시간에 가격 변경 시
    public void updateByItemDto(ItemDto itemDto) {
        this.lprice = itemDto.getLprice();
    }*/
}
