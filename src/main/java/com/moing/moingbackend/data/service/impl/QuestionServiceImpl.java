package com.moing.moingbackend.data.service.impl;

import com.moing.moingbackend.data.dao.QuestionDAO;
import com.moing.moingbackend.data.dto.QuestionDto;
import com.moing.moingbackend.data.dto.QuestionResponseDto;
import com.moing.moingbackend.data.entity.Question;
import com.moing.moingbackend.data.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionDAO questionDAO;

    @Autowired
    public QuestionServiceImpl(QuestionDAO questionDAO) {
        this.questionDAO = questionDAO;
    }


    @Override
    public QuestionResponseDto getQuestion(Long id) {
        Question question = questionDAO.selectQuestion(id);

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setId(question.getId());
        questionResponseDto.setAuthor(question.getAuthor());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setModifiedDate(question.getModifiedDate());

        return questionResponseDto;
    }


    @Override
    public QuestionResponseDto saveQuestion(QuestionDto questionDto) {
        Question question = new Question();

        question.setAuthor(questionDto.getAuthor());
        question.setContent(questionDto.getContent());
        question.setTitle(questionDto.getTitle());
        question.setContent(questionDto.getContent());
        question.setCreatedDate(questionDto.getCreatedDate());
        question.setModifiedDate(questionDto.getModifiedDate());

        Question savedQuestion = questionDAO.insertQuestion(question);

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setId(savedQuestion.getId());
        questionResponseDto.setAuthor(savedQuestion.getAuthor());
        questionResponseDto.setContent(savedQuestion.getContent());
        questionResponseDto.setTitle(savedQuestion.getTitle());


        return questionResponseDto;
    }


    @Override
    public QuestionResponseDto changeQuestion(Long id, String content) throws Exception {
        Question changedQuestion = questionDAO.updateQuestion(id, content);

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setId(changedQuestion.getId());
        questionResponseDto.setAuthor(changedQuestion.getAuthor());
        questionResponseDto.setContent(changedQuestion.getContent());
        questionResponseDto.setModifiedDate(changedQuestion.getModifiedDate());

        return questionResponseDto;
    }

    @Override
    public void deleteQuestion(Long id) throws Exception {
        questionDAO.deleteQuestion(id);
    }
    @Override
    public List<Question> getAllQuestions() {
        return questionDAO.getAllQuestions();
    }


}