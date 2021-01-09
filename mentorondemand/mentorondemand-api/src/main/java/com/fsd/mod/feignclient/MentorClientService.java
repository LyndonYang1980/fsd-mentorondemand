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
	public Mentor updateMentor(@RequestBody Mentor mentor);

	@PostMapping("/mentors/login")
	public Mentor loginMentor(@RequestBody Mentor mentor);

	@GetMapping(value = "/calendars")
	public List<Calendar> getCalendars();

	@GetMapping(value = "/calendars/{calendarId}")
	public Calendar getCalendar(@PathVariable Long calendarId);
	
	@PostMapping(value = "/calendars/findExistingCalendar1")
	public List<Calendar> findExistingCalendar1(@RequestBody Calendar calendar);
	
	@PostMapping(value = "/calendars/findExistingCalendar2")
	public List<Calendar> findExistingCalendar2(@RequestBody Calendar calendar);

	@GetMapping(value = "/calendars/getMentorCalendars/{mentorId}")
	public List<Calendar> getMentorCalendars(@PathVariable Long mentorId);

	@PostMapping(value = "/calendars", produces = "application/json")
	public Calendar addCalendar(@RequestBody Calendar calendar);

	@PutMapping(value = "/calendars")
	public Calendar updateCalendar(@RequestBody Calendar calendar);

	@DeleteMapping("/calendars/{calendarId}")
	public Boolean deleteCalendar(@PathVariable Long calendarId);

	@GetMapping(value = "/skills/getSkills")
	public ResponseEntity<List<Skill>> getSkills();

	@PostMapping(value = "/skills/addSkill")
	public Skill addSkill(@RequestBody Skill skill);

	@PutMapping(value = "/skills")
	public Skill updateSkill(@RequestBody Skill skill);

	@GetMapping("/skills/{skillId}")
	public Skill getSkill(@PathVariable Long skillId);

	@PostMapping(value = "/skills/{mentorId}")
	public ResponseEntity<Skill> setSkills(@RequestBody Skill skill, @PathVariable Long mentorId);

	@PostMapping(value = "/skills/findExistingSkills1/{skillName}/{mentorId}")
	public Boolean findExistingSkills(@PathVariable("skillName") String skillName,
			@PathVariable("mentorId") Long mentorId);

	@PostMapping(value = "/skills/findExistingSkills2")
	public Boolean findExistingSkills(@RequestBody Skill skill);

	@GetMapping(value = "/skills/getMentorSkills/{mentorId}")
	public ResponseEntity<List<Skill>> getMentorSkills(@PathVariable Long mentorId);

	@GetMapping("/mentors/searchMentorByKey/{searchKey}")
	public List<Mentor> searchMentorByKey(@PathVariable("searchKey") String searchKey);

	@DeleteMapping(value = "/skills/{skillId}")
	public Boolean deleteSkill(@PathVariable("skillId") Long skillId);

}
