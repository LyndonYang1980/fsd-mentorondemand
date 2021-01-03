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

	@GetMapping(value = "/mentors/getMentors")
	public ResponseEntity<List<Mentor>> getMentors();

	@GetMapping(value = "/mentors/{mentorId}")
	public ResponseEntity<Mentor> getMentor(@PathVariable Long mentorId);
	
	@PostMapping(value = "/mentors/addMentor")
	public ResponseEntity<Mentor> addMentor(@RequestBody Mentor mentor);

	@PutMapping(value = "/mentors/updateMentor")
	public ResponseEntity<Mentor> updateMentor(@RequestBody Mentor mentor);
	
	@PostMapping("/mentors/login")
	public ResponseEntity<Mentor> loginMentor(@RequestBody Mentor mentor);

	@GetMapping(value = "/calendars")
	public ResponseEntity<List<Calendar>> getCalendars();

	@GetMapping(value = "/calendars/{calendarId}")
	public ResponseEntity<Calendar> getCalendar(@PathVariable Long calendarId);

	@PostMapping(value = "/calendars", produces = "application/json")
	public ResponseEntity<Calendar> addCalendar(@RequestBody Calendar calendar);

	@PutMapping(value = "/calendars")
	public ResponseEntity<Calendar> updateCalendar(@RequestBody Calendar calendar);

	@DeleteMapping(value = "/calendars/{calendarId}")
	public void deleteCalendar(@PathVariable Long calendarId);

	@GetMapping(value = "/skills/getSkills")
	public ResponseEntity<List<Skill>> getSkills();

	@PostMapping(value = "/skills/addSkill")
	public ResponseEntity<Skill> addSkill(@RequestBody Skill skill);

	@GetMapping(value = "/skills/{skillId}")
	public ResponseEntity<Skill> getSkill(@PathVariable Long skillId);

	@PostMapping(value = "/skills/{mentorId}")
	public ResponseEntity<Skill> setSkills(@RequestBody Skill skill, @PathVariable Long mentorId);

	@GetMapping(value = "/skills/getMentorSkills/{mentorId}")
	public ResponseEntity<List<Skill>> getMentorSkills(@PathVariable Long mentorId);
	
	@GetMapping("/mentors/searchMentorByKey/{searchKey}")
	public List<Mentor> searchMentorByKey(@PathVariable("searchKey") String searchKey);

}
