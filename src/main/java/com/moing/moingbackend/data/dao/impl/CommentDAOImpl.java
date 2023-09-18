package com.moing.moingbackend.data.dao.impl;

import com.moing.moingbackend.data.dao.CommentDAO;
import com.moing.moingbackend.data.entity.Comment;
import com.moing.moingbackend.data.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CommentDAOImpl implements CommentDAO {
    private final CommentRepository commentRepository;
    @Autowired
    public CommentDAOImpl(CommentRepository commentRepository){
        this.commentRepository=commentRepository;
    }
    @Override
    public Comment insertComment(Comment comment) {
        Comment savedComment = commentRepository.save(comment);
        return savedComment;
    }

    @Override
    public Comment selectComment(Long id){
        Comment selectedComment;
        if(commentRepository.existsById(id)){
            selectedComment = commentRepository.getById(id);
        }else{
            selectedComment = new Comment();
        }
        return selectedComment;

    }

    @Override
    public Comment updateComment(Comment Comment) throws Exception {
        // id로 기존 데이터를 찾아온다.
        Optional<Comment> selectComment = commentRepository.findById(Comment.getId());

        // 기존 데이터가 존재하는지 확인한다.
        if (selectComment.isPresent()) {
            Comment existingComment = selectComment.get();

            // 수정할 데이터를 설정한다.
            existingComment.setAnswer(Comment.getAnswer());
            // 수정된 데이터를 데이터베이스에 저장한다.
            Comment updatedComment = commentRepository.save(existingComment);

            return updatedComment;
        } else {
            throw new Exception("해당 id에 해당하는 데이터가 존재하지 않습니다.");
        }
    }
    @Override
    public void deleteComment(Long id) throws Exception {
        Optional<Comment> selectedComment = commentRepository.findById(id);
        if(selectedComment.isPresent()){
            Comment comment = selectedComment.get();
            commentRepository.delete(comment);
        }else{
            throw new Exception();
        }

    }
    @Override
    public List<Comment> getAllApplications() {
        return commentRepository.findAll();
    }
}
