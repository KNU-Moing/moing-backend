package com.moing.moingbackend.data.repository;

import com.moing.moingbackend.data.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
