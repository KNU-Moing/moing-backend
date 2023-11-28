package com.moing.moingbackend.data.repository;

import com.moing.moingbackend.data.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByTitleContaining(String searchKeyword);
}