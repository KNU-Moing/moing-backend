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
            existingDiary.setImage(updateDiaryDto.getContent());
            existingDiary.setWeeks(updateDiaryDto.getContent());

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
