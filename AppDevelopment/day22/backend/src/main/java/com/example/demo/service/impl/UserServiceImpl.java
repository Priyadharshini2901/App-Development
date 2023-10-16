package com.example.demo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dto.request.UserRequest;
import com.example.demo.dto.response.UserResponse;
import com.example.demo.model.User;
import com.example.demo.model.enumerate.Role;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;



@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
//    private final OrderRepository orderRepository;

    @Override
    public List<UserResponse> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getUser(Long uid) {
        User user = userRepository.findByUid(uid);
        return mapUserToUserResponse(user);
    }

    @Override
    public UserResponse updateUser(UserRequest request, Long uid) {
        User user = userRepository.findByUid(uid);
        User newUser = new User();
        if (user != null) {
            newUser = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(request.getPassword())
                    .role(request.getRole())
                    
                    .build();
            userRepository.save(newUser);
        }
        return mapUserToUserResponse(newUser);
    }

//    @Override
//    public boolean deleteProduct(Long uid) {
//        User user = userRepository.findByUid(uid);
//
//        if (user != null) {
//            orderRepository.deleteByUserUid(uid);
//            userRepository.deleteByUid(uid);
//            return true;
//        } else {
//            return false;
//        }
//    }

    private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
//                .isEnabled(user.getIsEnabled())
                .build();
    }

	@Override
	public boolean deleteProduct(Long uid) {
		// TODO Auto-generated method stub
		return false;
	}

}