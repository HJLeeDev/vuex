package com.example.demo.domains;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@ToString
@Getter
public class Book {

    @Id
    @GeneratedValue
    private long id;

    private String title;

    private String content;
}
