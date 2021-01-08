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
import com.fsd.mod.feignclient.MentorClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CalendarController_Consumer {

	@Autowired
	MentorClientService mentorClientService;

	@GetMapping("/feign/calendars")
	public List<Calendar> getCalendars() {
		return mentorClientService.getCalendars();
	}

	@GetMapping("/feign/calendars/{calendarId}")
	public Calendar getCalendar(@PathVariable Long calendarId) {
		return mentorClientService.getCalendar(calendarId);
	}

	@PostMapping(value = "/feign/calendars/findExistingCalendar1")
	public List<Calendar> findExistingCalendar1(@RequestBody Calendar calendar) {
		return mentorClientService.findExistingCalendar1(calendar);
	}
	
	@PostMapping(value = "/feign/calendars/findExistingCalendar2")
	public List<Calendar> findExistingCalendar2(@RequestBody Calendar calendar){
		return mentorClientService.findExistingCalendar2(calendar);
	}

	@GetMapping("/feign/calendars/getMentorCalendars/{mentorId}")
	public List<Calendar> getMentorCalendars(@PathVariable Long mentorId) {
		return mentorClientService.getMentorCalendars(mentorId);
	}

	@PostMapping(value = "/feign/calendars", produces = "application/json")
	public Calendar addCalendar(@RequestBody Calendar calendar) {
		return mentorClientService.addCalendar(calendar);
	}

	@PutMapping(value = "/feign/calendars/{calendarId}")
	public Calendar updateCalendar(@RequestBody Calendar calendar) {
		return mentorClientService.updateCalendar(calendar);
	}

	@DeleteMapping("/feign/calendars/{calendarId}")
	public Boolean deleteCalendar(@PathVariable Long calendarId) {
		return mentorClientService.deleteCalendar(calendarId);
	}
}
