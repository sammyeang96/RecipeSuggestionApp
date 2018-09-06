package com.ex.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ex.beans.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
