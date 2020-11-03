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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fsd.mod.entities.Calendar;
import com.fsd.mod.entities.Mentor;
import com.fsd.mod.entities.Skill;

@FeignClient(value = "mentorondemand-mentor")
public interface MentorClientService {

	@RequestMapping("/mentors")
	public List<Mentor> getMentors();

	@RequestMapping("/mentors/{id}")
	public Mentor getMentor(@PathVariable Long mentorId);

	@RequestMapping(value = "/mentors", method = RequestMethod.POST)
	public void addMentor(@RequestBody Mentor mentor);

	@RequestMapping(value = "/mentors", method = RequestMethod.PUT)
	public void updateMentor(@RequestBody Mentor mentor);

	@GetMapping("/calendars")
	public List<Calendar> getCalendars();

	@GetMapping("/calendars/{calendarId}")
	public Calendar getCalendar(@PathVariable Long calendarId);

	@PostMapping(value = "/calendars", produces = "application/json")
	public void addCalendar(@RequestBody Calendar calendar);

	@PutMapping(value = "/calendars")
	public void updateCalendar(@RequestBody Calendar calendar);

	@DeleteMapping("/calendars/{id}")
	public void deleteCalendar(@PathVariable Long calendarId);

	@GetMapping("/skills/getSkills")
	public List<Skill> getSkills();

	@GetMapping("/skills/{mentorId}")
	public Skill getSkills(@PathVariable Long skillId);

	@PostMapping(value = "/skills/{mentorId}")
	public ResponseEntity<Skill> setSkills(@RequestBody Skill skill, @PathVariable Long mentorId);

}
