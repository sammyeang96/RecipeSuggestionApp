package com.ex.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="USER_INFO")
public class UserInfo {
	
	@Id
	@SequenceGenerator(name="info", 
	sequenceName="info_seq", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,
	generator="info")
	private int id;
	
	@OneToOne
	@JoinColumn(unique=true)
	private UserLogin username;
	
	private String firstname;
	
	private String lastname;
	
	public UserInfo() {}

	public UserInfo(int id, UserLogin username, String firstname, String lastname) {
		super();
		this.id = id;
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
	}

	@Override
	public String toString() {
		return "UserInformation [id=" + id + ", username=" + username + ", firstname=" + firstname + ", lastname="
				+ lastname + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public UserLogin getUsername() {
		return username;
	}

	public void setUsername(UserLogin username) {
		this.username = username;
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
}