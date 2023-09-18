package com.moing.moingbackend.controller;



import com.moing.moingbackend.data.dto.ChangeQuestionDto;
import com.moing.moingbackend.data.dto.QuestionDto;
import com.moing.moingbackend.data.dto.QuestionResponseDto;
import com.moing.moingbackend.data.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class QuestionController {

    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }


    @GetMapping()
    public ResponseEntity<QuestionResponseDto> getQuestion(Long id) {
        QuestionResponseDto questionResponseDto = questionService.getQuestion(id);

        return ResponseEntity.status(HttpStatus.OK).body(questionResponseDto);
    }

    @PostMapping()
    public ResponseEntity<QuestionResponseDto> createQuestion(@RequestBody QuestionDto questionDto) {
        QuestionResponseDto questionResponseDto = questionService.saveQuestion(questionDto);

        return ResponseEntity.status(HttpStatus.OK).body(questionResponseDto);
    }

    @PutMapping()
    public ResponseEntity<QuestionResponseDto> changeQuestion(
            @RequestBody ChangeQuestionDto changeQuestionDto) throws Exception {
        QuestionResponseDto questionResponseDto = questionService.changeQuestion(
                changeQuestionDto.getId(),
                changeQuestionDto.getContent());

        return ResponseEntity.status(HttpStatus.OK).body(questionResponseDto);

    }

    @DeleteMapping()
    public ResponseEntity<String> deleteQuestion(Long id) throws Exception {
        questionService.deleteQuestion(id);

        return ResponseEntity.status(HttpStatus.OK).body("정상적으로 삭제되었습니다.");
    }

}

