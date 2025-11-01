package com.hms.user.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.user.dto.ResponceDTO;
import com.hms.user.dto.UserDTO;
import com.hms.user.exception.HmsException;
import com.hms.user.service.UserService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/user")
@Validated
@CrossOrigin
public class UserAPI {
    
    @Autowired
    private UserService userService;

    @PostMapping("/register")
   public ResponseEntity<ResponceDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws HmsException{
    userService.registerUser(userDTO);
    return new ResponseEntity<>(new ResponceDTO("Account Created."),HttpStatus.CREATED);
   }
    
   @PostMapping("/login")
   public ResponseEntity<UserDTO> postMethodName(@RequestBody UserDTO userDTO) throws HmsException {
       return new ResponseEntity<>(userService.loginUser(userDTO),HttpStatus.OK);
   }
   
   
}
