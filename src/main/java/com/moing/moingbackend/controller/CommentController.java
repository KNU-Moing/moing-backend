package com.moing.moingbackend.controller;

import com.moing.moingbackend.data.dto.CommentDto;
import com.moing.moingbackend.data.service.CommentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/Comment")
public class CommentController {
    private final CommentService commentService;
    private final Logger LOGGER = LoggerFactory.getLogger(CommentService.class);

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping()
    public ResponseEntity<CommentDto> createComment(
            @RequestBody CommentDto commentDto, HttpServletRequest request) {
        CommentDto commentDtoResponse = commentService.saveComment(commentDto);

        LOGGER.info("호출 API: " + "create Comment" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " + LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body(commentDtoResponse);
    }

    @GetMapping()
    public ResponseEntity<CommentDto> getComment(Long id, HttpServletRequest request) {
        CommentDto commentDtoResponse = commentService.getComment(id);

        LOGGER.info("호출 API: " + "get Comment" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " + LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body(commentDtoResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CommentDto> updateComment(
            @PathVariable Long id,
            @RequestParam("answer") String answer, HttpServletRequest request) throws Exception {
        CommentDto commentDtoResponse = commentService.getComment(id);
        commentDtoResponse.setAnswer(answer);

        LOGGER.info("호출 API: " + "update Comment" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " + LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body(commentDtoResponse);
    }

    @DeleteMapping()
    public ResponseEntity<String> deleteComment(Long id, HttpServletRequest request) throws Exception {
        commentService.deleteComment(id);

        LOGGER.info("호출 API: " + "delete Comment" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " + LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body("성공적으로 삭제 되었습니다.");
    }
}