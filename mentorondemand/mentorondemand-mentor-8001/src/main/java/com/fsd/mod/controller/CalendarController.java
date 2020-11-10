package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<List<Calendar>> getCalendars() {
		List<Calendar> calendars = calendarService.getCalendars();
		if (calendars.size() > 0) {
			return new ResponseEntity<List<Calendar>>(calendars, HttpStatus.OK);
		}else {
			return new ResponseEntity<List<Calendar>>(calendars, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/calendars/{calendarId}")
	public ResponseEntity<Calendar> getCalendar(@PathVariable Long calendarId) {
		Calendar calendar = calendarService.getCalendar(calendarId);
		if (calendar != null) {
			return new ResponseEntity<Calendar>(calendar, HttpStatus.OK);
		}else {
			return new ResponseEntity<Calendar>(calendar, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = "/calendars", produces = "application/json")
	public ResponseEntity<Calendar> addCalendar(@RequestBody Calendar calendar) {
		Calendar addedCalendar = calendarService.addCalendar(calendar);
		if (addedCalendar != null) {
			return new ResponseEntity<Calendar>(addedCalendar, HttpStatus.OK);
		}else {
			return new ResponseEntity<Calendar>(addedCalendar, HttpStatus.NOT_MODIFIED);
		}
	}

	@PutMapping(value = "/calendars")
	public ResponseEntity<Calendar> updateCalendar(@RequestBody Calendar calendar) {
		Calendar updCalendar = calendarService.updateCalendar(calendar);
		if (updCalendar != null) {
			return new ResponseEntity<Calendar>(updCalendar, HttpStatus.OK);
		}else {
			return new ResponseEntity<Calendar>(updCalendar, HttpStatus.NOT_MODIFIED);
		}
	}

	@DeleteMapping("/calendars/{id}")
	public void deleteCalendar(@PathVariable Long calendarId) {
		calendarService.deleteCalendar(calendarId);
	}
}
