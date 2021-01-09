package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Calendar;
import com.fsd.mod.service.CalendarService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CalendarController {

	@Autowired
	CalendarService calendarService;

	@GetMapping(value = "/calendars")
	public List<Calendar> getCalendars() {
		List<Calendar> calendars = calendarService.getCalendars();
		return calendars;
	}

	@GetMapping(value = "/calendars/{calendarId}")
	public Calendar getCalendar(@PathVariable Long calendarId) {
		Calendar calendar = calendarService.getCalendar(calendarId);
		return calendar;
	}

	@GetMapping(value = "/calendars/getMentorCalendars/{mentorId}")
	public List<Calendar> getMentorCalendars(@PathVariable Long mentorId) {
		List<Calendar> calendars = calendarService.getMentorCalendars(mentorId);
		return calendars;
	}

	@PostMapping(value = "/calendars/findExistingCalendar1")
	public List<Calendar> findExistingCalendar1(@RequestBody Calendar calendar) {
		List<Calendar> calendars = calendarService.findExistingCalendar(calendar.getStartDate(), calendar.getEndDate(),
				calendar.getStartTime(), calendar.getEndTime(), calendar.getMentorId());
		return calendars;
	}

	@PostMapping(value = "/calendars/findExistingCalendar2")
	public List<Calendar> findExistingCalendar2(@RequestBody Calendar calendar) {
		List<Calendar> calendars = calendarService.findExistingCalendar(calendar.getStartDate(), calendar.getEndDate(),
				calendar.getStartTime(), calendar.getEndTime(), calendar.getMentorId(), calendar.getCalendarId());
		return calendars;
	}

	@PostMapping(value = "/calendars", produces = "application/json")
	public Calendar addCalendar(@RequestBody Calendar calendar) {
		Calendar addedCalendar = calendarService.addCalendar(calendar);
		return addedCalendar;
	}

	@PutMapping(value = "/calendars")
	public Calendar updateCalendar(@RequestBody Calendar calendar) {
		Calendar updCalendar = calendarService.updateCalendar(calendar);
		return updCalendar;
	}

	@DeleteMapping("/calendars/{calendarId}")
	public Boolean deleteCalendar(@PathVariable Long calendarId) {
		return calendarService.deleteCalendar(calendarId);
	}
}
