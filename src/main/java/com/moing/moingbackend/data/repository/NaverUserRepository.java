package com.moing.moingbackend.data.repository;

import com.moing.moingbackend.data.entity.NaverUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NaverUserRepository extends JpaRepository<NaverUser,Long> {
    Optional<NaverUser> findByNaverEmail(String email);
}
