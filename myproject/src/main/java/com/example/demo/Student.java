package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
private int id;
private String Name;
private String Color;
private double Price;
private String img;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return Name;
}
public void setName(String name) {
	Name = name;
}
public String getColor() {
	return Color;
}
public void setColor(String color) {
	Color = color;
}
public double getPrice() {
	return Price;
}
public void setPrice(double price) {
	Price = price;
}
public String getImg() {
	return img;
}
public void setImg(String img) {
	this.img = img;
}
public Student(int id, String name, String color, double price, String img) {
	super();
	this.id = id;
	Name = name;
	Color = color;
	Price = price;
	this.img = img;
}
public Student() {
	super();
	// TODO Auto-generated constructor stub
}

}