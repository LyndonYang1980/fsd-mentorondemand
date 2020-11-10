package com.fsd.mod.feignclient;

import java.util.List;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fsd.mod.entities.Calendar;
import com.fsd.mod.entities.Mentor;
import com.fsd.mod.entities.Skill;

@FeignClient(value = "mentorondemand-mentor")
public interface MentorClientService {

	@GetMapping("/mentors")
	public ResponseEntity<List<Mentor>> getMentors();

	@GetMapping("/mentors/{id}")
	public ResponseEntity<Mentor> getMentor(@PathVariable Long mentorId);

	@PostMapping(value = "/mentors")
	public ResponseEntity<Mentor> addMentor(@RequestBody Mentor mentor);

	@PutMapping(value = "/mentors")
	public ResponseEntity<Mentor> updateMentor(@RequestBody Mentor mentor);

	@GetMapping("/calendars")
	public ResponseEntity<List<Calendar>> getCalendars();

	@GetMapping("/calendars/{calendarId}")
	public ResponseEntity<Calendar> getCalendar(@PathVariable Long calendarId);

	@PostMapping(value = "/calendars", produces = "application/json")
	public ResponseEntity<Calendar> addCalendar(@RequestBody Calendar calendar);

	@PutMapping(value = "/calendars")
	public ResponseEntity<Calendar> updateCalendar(@RequestBody Calendar calendar);

	@DeleteMapping("/calendars/{id}")
	public void deleteCalendar(@PathVariable Long calendarId);

	@GetMapping("/skills/getSkills")
	public ResponseEntity<List<Skill>> getSkills();

	@GetMapping("/skills/{mentorId}")
	public ResponseEntity<Skill> getSkill(@PathVariable Long skillId);

	@PostMapping(value = "/skills/{mentorId}")
	public ResponseEntity<Skill> setSkills(@RequestBody Skill skill, @PathVariable Long mentorId);

}
