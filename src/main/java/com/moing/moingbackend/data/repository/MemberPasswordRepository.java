package com.moing.moingbackend.data.repository;

import com.moing.moingbackend.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface MemberPasswordRepository extends CrudRepository<User, Long> {

    @Modifying
    @Transactional
    @Query("UPDATE User mp SET mp.password = :password WHERE mp.user_id = :user_Id")
    void updatePassword(@Param("user_Id") Long user_Id, @Param("password") String password);
}