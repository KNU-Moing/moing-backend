package com.moing.moingbackend.data.dao.impl;

import com.moing.moingbackend.data.dao.DiaryDAO;
import com.moing.moingbackend.data.dto.UpdateDiaryDto;
import com.moing.moingbackend.data.entity.Diary;
import com.moing.moingbackend.data.repository.DiaryRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DiaryDAOImpl implements DiaryDAO {

    private final DiaryRepository diaryRepository;


    public DiaryDAOImpl(DiaryRepository diaryRepository) {
        this.diaryRepository = diaryRepository;
    }

    @Override
    public Diary insertDiary(Diary diary) {
        Diary savedDiary = diaryRepository.save(diary);
        return savedDiary;
    }

    @Override
    public Diary selectDiary(Long id) {
        Diary selectedDiary;
        if(diaryRepository.existsById(id)){
            selectedDiary = diaryRepository.getById(id);
        }else{
            selectedDiary = new Diary();
        }
        return selectedDiary;
    }

    @Override
    public Diary updateDiary(Long id, UpdateDiaryDto updateDiaryDto) throws Exception {
        Optional<Diary> selectedDiary = diaryRepository.findById(id);
        if (selectedDiary.isPresent()) {
            Diary existingDiary = selectedDiary.get();
            existingDiary.setId(updateDiaryDto.getId());
            existingDiary.setContent(updateDiaryDto.getContent());
            existingDiary.setImage(updateDiaryDto.getImage());  // 수정된 부분
            existingDiary.setWeeks(updateDiaryDto.getWeeks());  // 수정된 부분
            existingDiary.setBloodPressure(updateDiaryDto.getBloodPressure());  // 수정된 부분
            existingDiary.setWeight(updateDiaryDto.getWeight());  // 수정된 부분
            existingDiary.setSpecialProsecutor(updateDiaryDto.getSpecialProsecutor());  // 수정된 부분
            existingDiary.setBabySize(updateDiaryDto.getBabySize());  // 수정된 부분
            existingDiary.setBabyWeight(updateDiaryDto.getBabyWeight());  // 수정된 부분


            Diary updatedDiary = diaryRepository.save(existingDiary);

            return updatedDiary;
        } else {
            throw new Exception();
        }
    }

    @Override
    public void deleteDiary(Long id) throws Exception {
        Optional<Diary> selectedDiary = diaryRepository.findById(id);
        if(selectedDiary.isPresent()){
            Diary diary = selectedDiary.get();
            diaryRepository.delete(diary);
        }else{
            throw new Exception();
        }
    }
}
