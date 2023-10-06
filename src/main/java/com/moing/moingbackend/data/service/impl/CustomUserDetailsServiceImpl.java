package com.moing.moingbackend.data.service.impl;

import com.moing.moingbackend.data.entity.User;
import com.moing.moingbackend.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String account) throws UsernameNotFoundException {
        // username은 사용자가 로그인 시 입력한 계정(사용자 이름 또는 이메일)을 나타냅니다.

        // 사용자 정보를 데이터베이스에서 가져오기
        User user = userRepository.findByAccount(account);

        if (user == null) {
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다: " + account);
        }

        // UserDetails 객체를 생성하여 Spring Security에 반환
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getAccount()) // 여기에 사용자 이름 또는 이메일을 설정해야 합니다.
                .password(user.getPassword()) // 비밀번호는 암호화되어 저장되어야 합니다.
                .authorities(user.getRoles().toArray(new String[0])) // 사용자의 권한을 설정
                .build();
    }
}