package com.moing.moingbackend.data.service.impl;

import com.moing.moingbackend.config.secutiry.JwtTokenProvider;
import com.moing.moingbackend.data.dto.QuestionResponseDto;
import com.moing.moingbackend.data.entity.Liked;
import com.moing.moingbackend.data.entity.Question;
import com.moing.moingbackend.data.entity.User;
import com.moing.moingbackend.data.repository.LikedRepository;
import com.moing.moingbackend.data.repository.QuestionRepository;
import com.moing.moingbackend.data.repository.UserRepository;
import com.moing.moingbackend.data.service.LikedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LikedServiceImpl implements LikedService {
    private UserRepository userRepository;
    private QuestionRepository questionRepository;
    private LikedRepository likedRepository;
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    public LikedServiceImpl(UserRepository userRepository,
                            QuestionRepository questionRepository,
                            LikedRepository likedRepository,
                            JwtTokenProvider jwtTokenProvider){
        this.userRepository = userRepository;
        this.questionRepository = questionRepository;
        this.likedRepository = likedRepository;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public void likedCommunity(HttpServletRequest servletRequest, HttpServletResponse servletResponse, Long id) {
        String token = jwtTokenProvider.resolveToken(servletRequest);
        String account = jwtTokenProvider.getUsername(token);

        Question question = questionRepository.getById(id);
        User user = userRepository.getByAccount(account);

        Liked liked = new Liked();
        liked.setUser(user);
        liked.setQuestion(question);

        Liked savedLiked = likedRepository.save(liked);
    }

    @Override
    public void deleteLikedCommunity(HttpServletRequest servletRequest, HttpServletResponse servletResponse, Long id) {
        String token = jwtTokenProvider.resolveToken(servletRequest);
        String account = jwtTokenProvider.getUsername(token);

        Question question = questionRepository.getById(id);
        User user = userRepository.getByAccount(account);

        Optional<Liked> liked = likedRepository.findByUserAndQuestion(user,question);
        if (liked.isPresent()) {
            likedRepository.delete(liked.get());
        }
    }

    @Override
    public int countLikedCommunityByUser(HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
        String token = jwtTokenProvider.resolveToken(servletRequest);
        String account = jwtTokenProvider.getUsername(token);

        User user = userRepository.getByAccount(account);
        return likedRepository.countByUser(user);
    }

    @Override
    public List<QuestionResponseDto> getLikedCommunity(HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
        String token = jwtTokenProvider.resolveToken(servletRequest);
        String account = jwtTokenProvider.getUsername(token);

        User user = userRepository.getByAccount(account);
        List<Liked> likedList = likedRepository.findAllByUser(user);

        List<QuestionResponseDto> likedCommunity = new ArrayList<>();

        for(Liked question: likedList){
            QuestionResponseDto dto = new QuestionResponseDto();
            dto.setId(question.getQuestion().getId());
            dto.setTitle(question.getQuestion().getTitle());

            likedCommunity.add(dto);
        }
        return likedCommunity;
    }
}
