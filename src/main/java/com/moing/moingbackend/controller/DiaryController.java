package com.moing.moingbackend.controller;


import com.moing.moingbackend.data.dto.DiaryDto;
import com.moing.moingbackend.data.dto.DiaryResponseDto;
import com.moing.moingbackend.data.dto.QuestionResponseDto;
import com.moing.moingbackend.data.dto.UpdateDiaryDto;
import com.moing.moingbackend.data.entity.Diary;
import com.moing.moingbackend.data.service.DiaryService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import org.hibernate.sql.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/diary")
public class DiaryController {
    private final DiaryService diaryService;

    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping()
    public ResponseEntity<DiaryResponseDto> getDiary(Long id){
        DiaryResponseDto diaryResponseDto = diaryService.getDiary(id);

        return ResponseEntity.status(HttpStatus.OK).body(diaryResponseDto);
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PostMapping()
    public ResponseEntity<DiaryResponseDto> createDiary(@RequestBody DiaryDto diaryDto){
        DiaryResponseDto diaryResponseDto = diaryService.saveDiary(diaryDto);

        return ResponseEntity.status(HttpStatus.OK).body(diaryResponseDto);
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PutMapping(value = "/{id}")
    public ResponseEntity<DiaryResponseDto> updateDiary(
            @PathVariable Long id, @RequestBody UpdateDiaryDto updateDiaryDto) throws Exception{

        DiaryResponseDto diaryResponseDto = diaryService.changeDiary(id,updateDiaryDto);

        return ResponseEntity.status(HttpStatus.OK).body(diaryResponseDto);
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @DeleteMapping()
    public ResponseEntity<String> deleteDiary(Long id) throws Exception {
        diaryService.deleteDiary(id);

        return ResponseEntity.status(HttpStatus.OK).body("정상적으로 삭제되었습니다.");
    }
}
