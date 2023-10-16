package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.request.UserRequest;
import com.example.demo.dto.response.UserResponse;


public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
