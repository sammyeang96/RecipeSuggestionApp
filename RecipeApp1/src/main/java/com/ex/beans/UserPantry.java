package com.ex.beans;

import javax.persistence.Column;
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
@Table(name="USER_PANTRY")
public class UserPantry {
	
	@Id
	@Column(name="PANTRY_ID")
	@SequenceGenerator(name="pantry", 
	sequenceName="pantry_seq", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,
	generator="pantry")
	private int id;
	
	@OneToOne
	@JoinColumn(name="USERNAME")
	private UserLogin username;
	
	public UserPantry() {}

	public UserPantry(int id, UserLogin username) {
		super();
		this.id = id;
		this.username = username;
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

	@Override
	public String toString() {
		return "UserPantry [id=" + id + ", username=" + username + "]";
	}
}