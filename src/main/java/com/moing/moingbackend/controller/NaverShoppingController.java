package com.moing.moingbackend.controller;

import com.moing.moingbackend.data.dto.ItemDto;
import com.moing.moingbackend.data.service.impl.NaverShopSearch;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class NaverShoppingController {
    private final NaverShopSearch naverShopSearch;

    // Naver 쇼핑 API를 사용하여 검색된 상품 조회
    @GetMapping()
    public List<ItemDto> getItems(@RequestParam String query) {
        String resultString = naverShopSearch.search(query);
        return naverShopSearch.fromJSONtoItems(resultString);
    }


}
