package com.moing.moingbackend.data.dao;

import com.moing.moingbackend.data.entity.Comment;

import java.util.List;

public interface CommentDAO {
    Comment insertComment(Comment Comment);
    Comment selectComment(Long id);
    Comment updateComment(Comment Comment) throws Exception;
    void deleteComment(Long id) throws Exception;
    List<Comment> getAllApplications();
}
