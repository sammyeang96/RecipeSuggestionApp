

package com.ex.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;


@Component
@Entity
@Table(name="USER_LOGIN")
public class User_Login {
	@Id
	@Column(unique=true)
	private String username;
	private String password;
	
	public User_Login() {}

	public User_Login(String username, String password) {
		super();
		this.username = username;
		this.password = password;
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

	@Override
	public String toString() {
		return "User_Login [username=" + username + ", password=" + password + "]";
	}
}
