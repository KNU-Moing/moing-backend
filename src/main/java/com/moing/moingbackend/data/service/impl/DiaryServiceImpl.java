package com.moing.moingbackend.data.service.impl;

import com.moing.moingbackend.data.dao.DiaryDAO;
import com.moing.moingbackend.data.dto.DiaryDto;
import com.moing.moingbackend.data.dto.DiaryResponseDto;
import com.moing.moingbackend.data.dto.UpdateDiaryDto;
import com.moing.moingbackend.data.entity.Diary;
import com.moing.moingbackend.data.service.DiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiaryServiceImpl implements DiaryService {

    private final DiaryDAO diaryDAO;
    @Autowired
    public DiaryServiceImpl(DiaryDAO diaryDAO) {
        this.diaryDAO = diaryDAO;
    }

    @Override
    public DiaryResponseDto getDiary(Long id) {
        Diary diary = diaryDAO.selectDiary(id);
       // if (diary == null) {
         //   return null;
       // }
        DiaryResponseDto diaryResponsedto = new DiaryResponseDto();

        diaryResponsedto.setId(diary.getId());
        diaryResponsedto.setContent(diary.getContent());
        diaryResponsedto.setImage(diary.getImage());
        diaryResponsedto.setWeeks(diary.getWeeks());
        diaryResponsedto.setBloodPressure(diary.getBloodPressure());
        diaryResponsedto.setWeight(diary.getWeight());
        diaryResponsedto.setSpecialProsecutor(diary.getSpecialProsecutor());
        diaryResponsedto.setBabySize(diary.getBabySize());
        diaryResponsedto.setBabyWeight(diary.getBabyWeight());
        return diaryResponsedto;
    }

    @Override
    public DiaryResponseDto saveDiary(DiaryDto diaryDto) {
        Diary diary = new Diary();

        diary.setId(diaryDto.getId());
        diary.setContent(diaryDto.getContent());
        diary.setImage(diaryDto.getImage());
        diary.setWeeks(diaryDto.getWeeks());
        diary.setBloodPressure(diaryDto.getBloodPressure());
        diary.setWeight(diaryDto.getWeight());
        diary.setSpecialProsecutor(diaryDto.getSpecialProsecutor());
        diary.setBabySize(diaryDto.getBabySize());
        diary.setBabyWeight(diaryDto.getBabyWeight());

        Diary savedDiary = diaryDAO.insertDiary(diary);

        DiaryResponseDto diaryResponsedto = new DiaryResponseDto();
        diaryResponsedto.setId(diary.getId());
        diaryResponsedto.setContent(diary.getContent());
        diaryResponsedto.setImage(diary.getImage());
        diaryResponsedto.setWeeks(diary.getWeeks());
        diaryResponsedto.setBloodPressure(diary.getBloodPressure());
        diaryResponsedto.setWeight(diary.getWeight());
        diaryResponsedto.setSpecialProsecutor(diary.getSpecialProsecutor());
        diaryResponsedto.setBabySize(diary.getBabySize());
        diaryResponsedto.setBabyWeight(diary.getBabyWeight());

        return diaryResponsedto;
    }

    @Override
    public DiaryResponseDto changeDiary(Long id, UpdateDiaryDto updateDiaryDto) throws Exception {
        Diary diary = diaryDAO.selectDiary(id);

        Diary changedDiary = diaryDAO.updateDiary(id,updateDiaryDto);

        DiaryResponseDto diaryResponseDto= new DiaryResponseDto();
        diaryResponseDto.setId(changedDiary.getId());
        diaryResponseDto.setContent(changedDiary.getContent());
        diaryResponseDto.setWeeks(changedDiary.getWeeks());
        diaryResponseDto.setImage(changedDiary.getImage());
        diaryResponseDto.setBloodPressure(changedDiary.getBloodPressure());
        diaryResponseDto.setWeight(changedDiary.getWeight());
        diaryResponseDto.setSpecialProsecutor(changedDiary.getSpecialProsecutor());
        diaryResponseDto.setBabySize(changedDiary.getBabySize());
        diaryResponseDto.setBabyWeight(changedDiary.getBabyWeight());

        return diaryResponseDto;
    }

    @Override
    public void deleteDiary(Long id) throws Exception {
        diaryDAO.deleteDiary(id);
    }
    @Override
    public List<Diary> getAllApplications() {
        return null;//diaryDAO.getAllApplications();
    }
}
