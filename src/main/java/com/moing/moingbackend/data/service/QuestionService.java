package com.moing.moingbackend.data.service;

import com.moing.moingbackend.data.dto.QuestionDto;
import com.moing.moingbackend.data.dto.QuestionResponseDto;
import com.moing.moingbackend.data.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface QuestionService {

    QuestionResponseDto getQuestion(Long id);

    QuestionResponseDto saveQuestion(QuestionDto questionDto);

    QuestionResponseDto changeQuestion(Long id, String content) throws Exception;

    void deleteQuestion(Long id) throws Exception;

    List<Question> getAllQuestions();

    public List<Question> questionSearchList(String searchKeyword);

}
