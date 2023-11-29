package com.moing.moingbackend.data.service.impl;

import com.moing.moingbackend.config.secutiry.JwtTokenProvider;
import com.moing.moingbackend.data.dto.SumoneDto;
import com.moing.moingbackend.data.entity.Sumone;
import com.moing.moingbackend.data.entity.User;
import com.moing.moingbackend.data.repository.SumoneRepository;
import com.moing.moingbackend.data.repository.UserRepository;
import com.moing.moingbackend.data.service.SumoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;


import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@Service
public class SumoneServiceImpl implements SumoneService {
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;
    private final SumoneRepository sumoneRepository;
    @Autowired
    public SumoneServiceImpl(JwtTokenProvider jwtTokenProvider,
                             UserRepository userRepository,
                             SumoneRepository sumoneRepository){
        this.jwtTokenProvider = jwtTokenProvider;
        this.userRepository = userRepository;
        this.sumoneRepository = sumoneRepository;
    }
    @Override
    public SumoneDto getSumone(Long id, HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
        String token = jwtTokenProvider.resolveToken(servletRequest);
        String account = jwtTokenProvider.getUsername(token);
        ModelMapper mapper = new ModelMapper();
        SumoneDto sumoneDto = new SumoneDto();
        if(jwtTokenProvider.validateToken(token)){
            User user = userRepository.getByAccount(account);

            Sumone sumone = sumoneRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("Appointment not found with ID: " + id));;

            if(user.getId()==(sumone.getUser().getId())){
                sumoneDto = mapper.map(sumone, SumoneDto.class);
            }
        }
        return sumoneDto;
    }

    @Override
    public void saveSumone(SumoneDto sumoneDto, HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
        String token = jwtTokenProvider.resolveToken(servletRequest);
        String account = jwtTokenProvider.getUsername(token);

        User user = userRepository.getByAccount(account);

        Sumone insertSumone = new Sumone();
        insertSumone.setUser(user);
        insertSumone.setQuestion(sumoneDto.getQuestion());
        insertSumone.setAnswer(sumoneDto.getAnswer());

        sumoneRepository.save(insertSumone);
    }
}
