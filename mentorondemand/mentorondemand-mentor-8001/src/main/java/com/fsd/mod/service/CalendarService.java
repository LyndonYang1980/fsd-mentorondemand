package com.fsd.mod.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.Calendar;
import com.fsd.mod.entities.Mentor;
import com.fsd.mod.repository.CalendarRepo;

@Service
public class CalendarService {

	@Autowired
	CalendarRepo calendarRepo;

	@Autowired
	MentorService mentorService;

	public void setCalendar(Calendar calendar, Long mentorId) {

		Mentor mentorUser = mentorService.getMentor(mentorId);
		calendar.setMentorId(mentorId);
		calendarRepo.save(calendar);
	}

	public List<Calendar> getCalendars() {

		List<Calendar> calendarList = new ArrayList<>();
		calendarRepo.findAll().forEach(calendarList::add);
		return calendarList;
	}

	public Calendar getCalendar(Long calendarId) {
		return calendarRepo.findOne(calendarId);
	}

	public Calendar addCalendar(Calendar calendar) {
		return calendarRepo.save(calendar);
	}

	public Calendar saveCalendar(Calendar calendar) {
		return calendarRepo.save(calendar);
	}

	public Calendar updateCalendar(Calendar calendar) {
		return calendarRepo.save(calendar);
	}

	public void deleteCalendar(Long calendarId) {
		calendarRepo.delete(calendarId);
	}

}
