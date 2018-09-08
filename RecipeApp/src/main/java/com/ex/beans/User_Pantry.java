package com.ex.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
public class User_Pantry {
	
	@Id
	@Column(name="USER_PANTRY_ID")
	@SequenceGenerator(name="user_pantry", sequenceName="user_pantry_seq", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="user_pantry")
	private int id;
	
	@OneToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private User_Login username;
	
	public User_Pantry() {}

	public User_Pantry(int id, User_Login username) {
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

	public User_Login getUsername() {
		return username;
	}

	public void setUsername(User_Login username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "User_Pantry [id=" + id + ", username=" + username + "]";
	}
}
