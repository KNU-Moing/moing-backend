package com.moing.moingbackend.data.service.impl;

import com.moing.moingbackend.data.dao.CommentDAO;
import com.moing.moingbackend.data.dto.CommentDto;
import com.moing.moingbackend.data.entity.Comment;
import com.moing.moingbackend.data.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class CommentServiceImpl implements CommentService {

    private final CommentDAO commentDAO;
    @Autowired
    public CommentServiceImpl(
            CommentDAO commentDAO){
        this.commentDAO = commentDAO;
    }
    @Override
    public CommentDto getComment(Long id) {
        Comment comment = commentDAO.selectComment(id);
        if (comment == null) {
            return null;
        }
        CommentDto commentResponse = new CommentDto();

        commentResponse.setId(comment.getId());
        commentResponse.setAnswer(comment.getAnswer());
        return commentResponse;
    }

    @Override
    public CommentDto saveComment(CommentDto commentDto) {
        Comment comment = new Comment();

        comment.setId(commentDto.getId());
        comment.setAnswer(commentDto.getAnswer());

        Comment savedComment = commentDAO.insertComment(comment);

        CommentDto commentResponse = new CommentDto();
        commentResponse.setId(savedComment.getId());
        commentResponse.setAnswer(savedComment.getAnswer());

        return commentResponse;
    }

    @Override
    public CommentDto updateComment(Long id, CommentDto commentDto) throws Exception {
        // id로 기존 데이터를 찾아온다.
        Comment comment = commentDAO.selectComment(id);

        // 기존 데이터가 존재하는지 확인한다.
        if (comment == null) {
            throw new Exception("해당 id에 해당하는 데이터가 존재하지 않습니다.");
        }
        // 수정할 데이터를 설정한다.
        comment.setAnswer(commentDto.getAnswer());

        // 수정된 데이터를 데이터베이스에 저장한다.
        Comment updatedComment = commentDAO.updateComment(comment);

        // 수정된 데이터를 DTO로 변환하여 반환한다.
        CommentDto updatedCommentDto = new CommentDto();
        updatedCommentDto.setId(updatedComment.getId());
        updatedCommentDto.setAnswer(updatedComment.getAnswer());
        return updatedCommentDto;
    }

    @Override
    public void deleteComment(Long id) throws Exception {
        commentDAO.deleteComment(id);
    }

    @Override
    public List<Comment> getAllApplications() {
        return commentDAO.getAllApplications();
    }
}