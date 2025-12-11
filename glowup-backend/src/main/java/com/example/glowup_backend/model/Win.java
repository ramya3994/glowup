package com.example.glowup_backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "wins")
public class Win {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    private String title;        // e.g., "Solved 5 DSA problems"

    private String category;     // e.g., "Study", "Health", "Career"

    private Integer mood;        // 1–5 rating

    @Column(length = 500)
    private String notes;

    public Win() {}

    public Win(LocalDate date, String title, String category, Integer mood, String notes) {
        this.date = date;
        this.title = title;
        this.category = category;
        this.mood = mood;
        this.notes = notes;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Integer getMood() { return mood; }
    public void setMood(Integer mood) { this.mood = mood; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
}
