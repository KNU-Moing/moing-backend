package com.moing.moingbackend.data.repository;

import com.moing.moingbackend.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByKakaoId(String kakaoId);
}
