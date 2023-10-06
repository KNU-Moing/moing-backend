package com.moing.moingbackend.data.service.impl;

import com.moing.moingbackend.data.dao.CommentDAO;
import com.moing.moingbackend.data.dto.CommentDto;
import com.moing.moingbackend.data.entity.Comment;
import com.moing.moingbackend.data.entity.Question;
import com.moing.moingbackend.data.entity.User;
import com.moing.moingbackend.data.repository.QuestionRepository;
import com.moing.moingbackend.data.service.CommentService;
import com.mysql.cj.log.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    private final Logger LOGGER = LoggerFactory.getLogger(CommentService.class);

    private final CommentDAO commentDAO;
    private final QuestionRepository questionRepository;
    @Autowired
    public CommentServiceImpl(
            CommentDAO commentDAO, QuestionRepository questionRepository){
        this.commentDAO = commentDAO;
        this.questionRepository = questionRepository;
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
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//
//        if (authentication != null && authentication.getPrincipal() instanceof User) {
//            User currentUser = (User) authentication.getPrincipal();
//            comment.setUser(currentUser);
//        } else {
//            // 사용자 정보를 찾을 수 없는 경우 예외 처리 또는 기본 사용자 설정
//            // 예외 처리 또는 기본 사용자 설정에 대한 로직을 추가해야 합니다.
//            LOGGER.info("사용자 찾지 못함");
//        }
//        Long articleId = commentDto.getArticle_id();
//        Question question = questionRepository.findById(articleId)
//                .orElseThrow(() -> new EntityNotFoundException("해당 article_id에 대한 Question을 찾을 수 없습니다: " + articleId));
//
//        // Comment 엔티티에 Question 설정
//        comment.setQuestion(question);
        Comment savedComment = commentDAO.insertComment(comment);

        CommentDto commentResponse = new CommentDto();
        commentResponse.setId(savedComment.getId());
        commentResponse.setAnswer(savedComment.getAnswer());
//        commentResponse.setArticle_id(savedComment.getQuestion().getId());
//        commentResponse.setUser_id(savedComment.getUser().getUser_id());

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