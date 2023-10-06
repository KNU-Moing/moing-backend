package com.moing.moingbackend.data.dao.impl;

import com.moing.moingbackend.data.repository.QuestionRepository;
import com.moing.moingbackend.data.dao.QuestionDAO;
import com.moing.moingbackend.data.entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Component
public class QuestionDAOImpl implements QuestionDAO {
    private QuestionRepository questionRepository;

    @Autowired
    public QuestionDAOImpl(QuestionRepository questionRepository){
        this.questionRepository = questionRepository;
    }
    @Override
    public Question insertQuestion(Question Question) {
        Question savedQuestion = questionRepository.save(Question);

        return savedQuestion;
    }


    @Override
    public Question selectQuestion(Long id) {
        Question selectedQuestion;
        if(questionRepository.existsById(id)){
            selectedQuestion = questionRepository.getById(id);
        }else{
            selectedQuestion = new Question();
        }

        return selectedQuestion;
    }


    @Override
    public Question updateQuestion(Long id, String content) throws Exception {
        Optional<Question> selectedQuestion = questionRepository.findById(id);

        Question updatedQuestion;
        if (selectedQuestion.isPresent()) {
            Question Question = selectedQuestion.get();

              Question.setContent(content);
              Question.setModifiedDate(LocalDateTime.now());

            updatedQuestion = questionRepository.save(Question);
        } else {
            throw new Exception();
        }

        return updatedQuestion;
    }

    @Override
    public void deleteQuestion(Long id) throws Exception {
        Optional<Question> selectedQuestion = questionRepository.findById(id);

        if (selectedQuestion.isPresent()) {
            Question question = selectedQuestion.get();

            questionRepository.delete(question);
        } else {
            throw new Exception();
        }
    }
    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
}
