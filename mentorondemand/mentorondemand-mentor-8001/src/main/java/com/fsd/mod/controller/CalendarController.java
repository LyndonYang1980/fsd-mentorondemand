package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Calendar;
import com.fsd.mod.service.CalendarService;

@RestController
public class CalendarController {

	@Autowired
	CalendarService calendarService;

	@GetMapping("/calendars")
	public List<Calendar> getCalendars() {
		return calendarService.getCalendars();
	}

	@GetMapping("/calendars/{calendarId}")
	public Calendar getCalendar(@PathVariable Long calendarId) {
		return calendarService.getCalendar(calendarId);
	}

	@PostMapping(value = "/calendars", produces = "application/json")
	public void addCalendar(@RequestBody Calendar calendar) {
		calendarService.addCalendar(calendar);
	}

	@PutMapping(value = "/calendars")
	public void updateCalendar(@RequestBody Calendar calendar) {
		calendarService.updateCalendar(calendar);
	}

	@DeleteMapping("/calendars/{id}")
	public void deleteCalendar(@PathVariable Long calendarId) {
		calendarService.deleteCalendar(calendarId);
	}
}
