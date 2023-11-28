package com.moing.moingbackend.data.service.impl;

import com.moing.moingbackend.data.repository.ProductRepository;
import com.moing.moingbackend.data.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


}
