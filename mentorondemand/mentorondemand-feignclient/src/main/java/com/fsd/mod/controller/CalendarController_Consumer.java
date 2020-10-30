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
import com.fsd.mod.feignclient.MentorClientService;

@RestController
public class CalendarController_Consumer {

	@Autowired
	MentorClientService mentorClientService;

	@GetMapping("/consumer/calendars")
	public List<Calendar> getCalendars() {
		return mentorClientService.getCalendars();
	}

	@GetMapping("/consumer/calendars/{calendarId}")
	public Calendar getCalendar(@PathVariable Long calendarId) {
		return mentorClientService.getCalendar(calendarId);
	}

	@PostMapping(value = "/consumer/calendars", produces = "application/json")
	public void addCalendar(@RequestBody Calendar calendar) {
		mentorClientService.addCalendar(calendar);
	}

	@PutMapping(value = "/consumer/calendars/{id}")
	public void updateCalendar(@RequestBody Calendar calendar) {
		mentorClientService.updateCalendar(calendar);
	}

	@DeleteMapping("/consumer/calendars/{id}")
	public void deleteCalendar(@PathVariable Long calendarId) {
		mentorClientService.deleteCalendar(calendarId);
	}
}
