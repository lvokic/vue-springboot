package com.evan.wj.service;

import com.evan.wj.dao.UsersDAO;
import com.evan.wj.pojo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {
    @Autowired
    UsersDAO usersDAO;

    public List<Users> usersList() {
        Sort sort = new Sort(Sort.Direction.DESC, "id");
        return usersDAO.findAll(sort);
    }

    public Users getByName(String username) {
        return usersDAO.findByUsername(username);
    }

    public void add(Users users) {
        usersDAO.save(users);
    }
}
