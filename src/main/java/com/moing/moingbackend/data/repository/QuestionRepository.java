package com.moing.moingbackend.data.repository;

import com.moing.moingbackend.data.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}