package com.example.glowup_backend.controller;



import com.example.glowup_backend.model.Win;
import com.example.glowup_backend.service.WinService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173") // React dev server
@RestController
@RequestMapping("/api/wins")
public class WinController {

    private final WinService winService;

    public WinController(WinService winService) {
        this.winService = winService;
    }

    @GetMapping
    public List<Win> getAll() {
        return winService.getAllWins();
    }

    @GetMapping("/{id}")
    public Win getById(@PathVariable Long id) {
        return winService.getWinById(id);
    }

    @PostMapping
    public Win create(@RequestBody Win win) {
        return winService.createWin(win);
    }

    @PutMapping("/{id}")
    public Win update(@PathVariable Long id, @RequestBody Win win) {
        return winService.updateWin(id, win);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        winService.deleteWin(id);
    }

    @GetMapping("/by-date")
    public List<Win> byDate(@RequestParam String date) {
        return winService.getWinsByDate(LocalDate.parse(date));
    }

    @GetMapping("/by-category")
    public List<Win> byCategory(@RequestParam String category) {
        return winService.getWinsByCategory(category);
    }
}
