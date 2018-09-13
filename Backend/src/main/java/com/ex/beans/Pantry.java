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
@Table(name="PANTRY")
public class Pantry {
	
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
	
	String ingredients;
	
	public Pantry() {}
	
	public Pantry(int id, UserLogin username, String ingredients) {
		super();
		this.id = id;
		this.username = username;
		this.ingredients = ingredients;
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

	public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	@Override
	public String toString() {
		return "Pantry [id=" + id + ", username=" + username + ", ingredients=" + ingredients + "]";
	}
}
