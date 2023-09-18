package com.moing.moingbackend.data.service;

import com.moing.moingbackend.data.dto.CommentDto;
import com.moing.moingbackend.data.entity.Comment;

import java.util.List;

public interface CommentService {
    CommentDto getComment(Long id);
    CommentDto saveComment(CommentDto commentDto);
    CommentDto updateComment(Long id, CommentDto CommentDto) throws Exception;
    void deleteComment(Long id) throws Exception;
    List<Comment> getAllApplications();
}
