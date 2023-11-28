package com.moing.moingbackend.controller;



import com.moing.moingbackend.data.dto.ChangeQuestionDto;
import com.moing.moingbackend.data.dto.QuestionDto;
import com.moing.moingbackend.data.dto.QuestionResponseDto;
import com.moing.moingbackend.data.entity.Question;
import com.moing.moingbackend.data.service.QuestionService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/question")
public class QuestionController {
    private final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping()
    public ResponseEntity<QuestionResponseDto> getQuestion(Long id) {
        QuestionResponseDto questionResponseDto = questionService.getQuestion(id);
        long currentTime = System.currentTimeMillis();
        LOGGER.info("[getSign] request Data :: Id : {}", id);

        LOGGER.info(
                "[getSign] response Data :: productId : {}, productName : {}, productPrice : {}, productStock : {}",
                questionResponseDto.getId(), questionResponseDto.getAuthor(),
                questionResponseDto.getTitle(), questionResponseDto.getContent());
        LOGGER.info("[getSign] Response Time : {}ms", System.currentTimeMillis() - currentTime);


        return ResponseEntity.status(HttpStatus.OK).body(questionResponseDto);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PostMapping()
    public ResponseEntity<QuestionResponseDto> createQuestion(@RequestBody QuestionDto questionDto) {
        long currentTime = System.currentTimeMillis();
        QuestionResponseDto questionResponseDto = questionService.saveQuestion(questionDto);

        LOGGER.info("[createSign] Response Time : {}ms", System.currentTimeMillis() - currentTime);
        return ResponseEntity.status(HttpStatus.OK).body(questionResponseDto);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PutMapping()
    public ResponseEntity<QuestionResponseDto> changeQuestion(
            @RequestBody ChangeQuestionDto changeQuestionDto) throws Exception {
        long currentTime = System.currentTimeMillis();
        LOGGER.info("[changeQuestion] request Data :: productContent : {}, productContent : {}",
                changeQuestionDto.getId(), changeQuestionDto.getContent());


        QuestionResponseDto questionResponseDto = questionService.changeQuestion(
                changeQuestionDto.getId(),
                changeQuestionDto.getContent());

        LOGGER.info(
                "[changeQuestionName] response Data :: questionId : {}, questionTitle : {}, questionAuthor : {}, questionContent : {}",
                questionResponseDto.getId(), questionResponseDto.getTitle(),
                questionResponseDto.getAuthor(), questionResponseDto.getContent());
        LOGGER.info("[changeProductName] response Time : {}ms",
                System.currentTimeMillis() - currentTime);

        return ResponseEntity.status(HttpStatus.OK).body(questionResponseDto);

    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @DeleteMapping()
    public ResponseEntity<String> deleteQuestion(Long id) throws Exception {
        questionService.deleteQuestion(id);

        long currentTime = System.currentTimeMillis();
        LOGGER.info("[deleteQuestion] request Data :: questionId : {}", id);

//        questionService.deleteQuestion(id);

        LOGGER.info("[deleteProduct] response Time : {}ms",
                System.currentTimeMillis() - currentTime);

        return ResponseEntity.status(HttpStatus.OK).body("정상적으로 삭제되었습니다.");
    }

    @GetMapping("/all")
    public ResponseEntity<List<Question>> getAllQuestions() {
        List<Question> questions = questionService.getAllQuestions();

        return ResponseEntity.status(HttpStatus.OK).body(questions);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping("/board/list")
    public ResponseEntity<List<Question>> boardList(@PageableDefault(page = 0, size = 10, sort = "id", direction = Sort.Direction.DESC)
                                Pageable pageable,
                            String searchKeyword){

        /*검색기능-3*/
        List<Question> list = null;

        /*searchKeyword = 검색하는 단어*/
        if(searchKeyword == null){
            list =questionService.getAllQuestions(); //기존의 리스트보여줌
        }else{
            list = questionService.questionSearchList(searchKeyword); //검색리스트반환
        }

        return ResponseEntity.status(HttpStatus.OK).body(list);
    }


}

