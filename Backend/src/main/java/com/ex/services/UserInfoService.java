package com.ex.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.UserInfo;
import com.ex.repositories.UserInfoRepository;

@Service("userInformationService")
public class UserInfoService {
	
	@Autowired
	private UserInfoRepository userInformationRepo;
	
	public UserInfo addUserInformation(UserInfo a) {
		return userInformationRepo.add(a);
	}

}
