package com.evan.wj.dao;

import com.evan.wj.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersDAO extends JpaRepository<User,Integer> {
    User findByUsername(String username);

}
