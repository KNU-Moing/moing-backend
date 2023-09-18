package com.moing.moingbackend.data.repository;

import com.moing.moingbackend.data.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
