package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Calendar;
import com.fsd.mod.feignclient.MentorClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CalendarController_Consumer {

	@Autowired
	MentorClientService mentorClientService;

	@GetMapping("/feign/calendars")
	public ResponseEntity<List<Calendar>> getCalendars() {
		return mentorClientService.getCalendars();
	}

	@GetMapping("/feign/calendars/{calendarId}")
	public ResponseEntity<Calendar> getCalendar(@PathVariable Long calendarId) {
		return mentorClientService.getCalendar(calendarId);
	}

	@PostMapping(value = "/feign/calendars", produces = "application/json")
	public ResponseEntity<Calendar> addCalendar(@RequestBody Calendar calendar) {
		return mentorClientService.addCalendar(calendar);
	}

	@PutMapping(value = "/feign/calendars/{calendarId}")
	public ResponseEntity<Calendar> updateCalendar(@RequestBody Calendar calendar) {
		return mentorClientService.updateCalendar(calendar);
	}

	@DeleteMapping("/feign/calendars/{calendarId}")
	public void deleteCalendar(@PathVariable Long calendarId) {
		mentorClientService.deleteCalendar(calendarId);
	}
}
