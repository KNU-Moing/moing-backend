package com.moing.moingbackend.data.service;

import com.moing.moingbackend.data.dto.DiaryDto;
import com.moing.moingbackend.data.dto.DiaryResponseDto;
import com.moing.moingbackend.data.dto.UpdateDiaryDto;
import com.moing.moingbackend.data.entity.Diary;

import java.util.List;

public interface DiaryService {
    DiaryResponseDto getDiary(Long id);
    DiaryResponseDto saveDiary(DiaryDto diaryDto);

    DiaryResponseDto changeDiary(Long id, UpdateDiaryDto updateDiaryDto) throws Exception;

    void deleteDiary(Long id) throws Exception;
    List<Diary> getAllApplications();


}
