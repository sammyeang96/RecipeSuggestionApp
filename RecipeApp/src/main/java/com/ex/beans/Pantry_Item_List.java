package com.ex.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="PANTRY_ITEM_LIST")
public class Pantry_Item_List {
	@Id
	@Column
	@SequenceGenerator(name="user_item_list", sequenceName="user_item_list_seq", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="user_item_list")
	private int id;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="PANTRY_ITEM")
	private UserPantry user_Pantry_Id;
	
	@Column
	private String item_Name;
	
	@Column
	private String item_Category;
	
	@Column
	private double item_Weight;
	
	public Pantry_Item_List() {}

	public Pantry_Item_List(int id, UserPantry user_Pantry_Id, String item_Name, String item_Category,
			double item_Weight) {
		super();
		this.id = id;
		this.user_Pantry_Id = user_Pantry_Id;
		this.item_Name = item_Name;
		this.item_Category = item_Category;
		this.item_Weight = item_Weight;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public UserPantry getUser_Pantry_Id() {
		return user_Pantry_Id;
	}

	public void setUser_Pantry_Id(UserPantry user_Pantry_Id) {
		this.user_Pantry_Id = user_Pantry_Id;
	}

	public String getItem_Name() {
		return item_Name;
	}

	public void setItem_Name(String item_Name) {
		this.item_Name = item_Name;
	}

	public String getItem_Category() {
		return item_Category;
	}

	public void setItem_Category(String item_Category) {
		this.item_Category = item_Category;
	}

	public double getItem_Weight() {
		return item_Weight;
	}

	public void setItem_Weight(double item_Weight) {
		this.item_Weight = item_Weight;
	}


	@Override
	public String toString() {
		return "Pantry_Item_List [id=" + id + ", user_Pantry_Id=" + user_Pantry_Id + ", item_Name=" + item_Name
				+ ", item_Category=" + item_Category + ", item_Weight=" + item_Weight + "]";
	}
}