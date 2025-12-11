package com.example.glowup_backend.service;

import com.example.glowup_backend.model.Win;
import com.example.glowup_backend.repository.WinRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class WinService {

    private final WinRepository winRepository;

    public WinService(WinRepository winRepository) {
        this.winRepository = winRepository;
    }

    public List<Win> getAllWins() {
        return winRepository.findAll();
    }

    public Win getWinById(Long id) {
        return winRepository.findById(id).orElse(null);
    }

    public Win createWin(Win win) {
        if (win.getDate() == null) {
            win.setDate(LocalDate.now());
        }
        return winRepository.save(win);
    }

    public Win updateWin(Long id, Win updated) {
        return winRepository.findById(id)
                .map(existing -> {
                    existing.setDate(updated.getDate());
                    existing.setTitle(updated.getTitle());
                    existing.setCategory(updated.getCategory());
                    existing.setMood(updated.getMood());
                    existing.setNotes(updated.getNotes());
                    return winRepository.save(existing);
                })
                .orElse(null);
    }

    public void deleteWin(Long id) {
        winRepository.deleteById(id);
    }

    public List<Win> getWinsByDate(LocalDate date) {
        return winRepository.findByDate(date);
    }

    public List<Win> getWinsByCategory(String category) {
        return winRepository.findByCategory(category);
    }
}
