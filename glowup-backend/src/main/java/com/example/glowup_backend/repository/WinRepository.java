package com.example.glowup_backend.repository;



import com.example.glowup_backend.model.Win;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface WinRepository extends JpaRepository<Win, Long> {

    List<Win> findByDate(LocalDate date);

    List<Win> findByCategory(String category);
}
