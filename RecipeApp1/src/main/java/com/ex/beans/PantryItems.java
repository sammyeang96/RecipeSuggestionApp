package com.ex.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="PANTY_ITEMS")
public class PantryItems {
	
	@Id
	@Column(name="ITEM_ID")
	private int id;
	
	@ManyToOne
	@JoinColumn(name="PANTRY_ID")
	private UserPantry pantryId;
	
	@Column
	private String name;
	
	@Column
	private String type;
	
	@Column
	private double weight;
	
	public PantryItems() {}

	public PantryItems(int id, UserPantry pantryId, String name, String type, double weight) {
		super();
		this.id = id;
		this.pantryId = pantryId;
		this.name = name;
		this.type = type;
		this.weight = weight;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public UserPantry getPantryId() {
		return pantryId;
	}

	public void setPantryId(UserPantry pantryId) {
		this.pantryId = pantryId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	@Override
	public String toString() {
		return "PantryItems [id=" + id + ", pantryId=" + pantryId + ", name=" + name + ", type=" + type + ", weight="
				+ weight + "]";
	}
}