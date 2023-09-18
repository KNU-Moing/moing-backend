package com.moing.moingbackend.data.dao;

import com.moing.moingbackend.data.entity.Question;

public interface QuestionDAO {
    Question insertQuestion(Question question);
    Question selectQuestion(Long id);
    Question updateQuestion(Long id, String content) throws Exception;

    void deleteQuestion(Long id) throws Exception;
//    List<Question> getAllApplication();
}
