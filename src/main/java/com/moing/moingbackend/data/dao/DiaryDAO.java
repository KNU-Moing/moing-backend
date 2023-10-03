package com.moing.moingbackend.data.dao;

import com.moing.moingbackend.data.dto.UpdateDiaryDto;
import com.moing.moingbackend.data.entity.Diary;

public interface DiaryDAO {
    Diary insertDiary(Diary diary);
    Diary selectDiary(Long id);
    Diary updateDiary(Long id, UpdateDiaryDto updateDiaryDto)throws Exception;

    void deleteDiary(Long id)throws Exception;


}
