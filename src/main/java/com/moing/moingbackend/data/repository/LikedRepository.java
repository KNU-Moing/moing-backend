package com.moing.moingbackend.data.repository;

import com.moing.moingbackend.data.entity.Liked;
import com.moing.moingbackend.data.entity.Question;
import com.moing.moingbackend.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LikedRepository extends JpaRepository<Liked,Long> {
    Optional<Liked> findByUserAndQuestion(User user, Question question);

    int countByUser(User user);

    List<Liked> findAllByUser(User user);

}
