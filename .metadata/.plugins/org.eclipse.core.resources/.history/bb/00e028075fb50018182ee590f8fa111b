package com.ex.beans;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="LOGIN_INFORMATION")
public class UserLogin {
	
	@Id
	private String username;
	
	private String password;
	
	private String firstname;
	
	private String lastname;
	
	public UserLogin() {}

	public UserLogin(String username, String password, String firstname, String lastname) {
		super();
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	@Override
	public String toString() {
		return "UserLogin [username=" + username + ", password=" + password + ", firstname=" + firstname + ", lastname="
				+ lastname + "]";
	}

}
