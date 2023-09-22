package com.moing.moingbackend.data.service;

import com.moing.moingbackend.data.entity.User;
import com.moing.moingbackend.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(String kakaoId, String nickname, String ageRange) {
        // 이미 존재하는 사용자인지 확인
        User existingUser = userRepository.findByKakaoId(kakaoId);

        if (existingUser != null) {
            // 이미 존재하는 사용자라면 업데이트
            existingUser.setNickname(nickname);
            existingUser.setAgeRange(ageRange);
            return userRepository.save(existingUser);
        } else {
            // 존재하지 않는 사용자라면 새로운 엔티티 생성
            User newUser = new User();
            newUser.setKakaoId(kakaoId);
            newUser.setNickname(nickname);
            newUser.setAgeRange(ageRange);
            return userRepository.save(newUser);
        }
    }
}
