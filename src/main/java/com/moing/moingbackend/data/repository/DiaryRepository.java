package com.moing.moingbackend.data.repository;

import com.moing.moingbackend.data.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary,Long> {
}
