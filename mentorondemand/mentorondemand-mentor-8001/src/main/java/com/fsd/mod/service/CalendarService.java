package com.fsd.mod.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

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

	@Transactional
	public Calendar addCalendar(Calendar calendar) {
		try {
			return calendarRepo.save(calendar);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public List<Calendar> getMentorCalendars(Long mentorId) {
		return calendarRepo.findByMentorId(mentorId);
	}

	public List<Calendar> findExistingCalendar(Date startDate, Date endDate, Date startTime, Date endTime,
			Long mentorId) {
		return calendarRepo.findExistingCalendar(startDate, endDate, startTime, endTime, mentorId);
	}

	public List<Calendar> findExistingCalendar(Date startDate, Date endDate, Date startTime, Date endTime,
			Long mentorId, Long calendarId) {
		return calendarRepo.findExistingCalendar(startDate, endDate, startTime, endTime, mentorId, calendarId);
	}

	@Transactional
	public Calendar saveCalendar(Calendar calendar) {
		return calendarRepo.save(calendar);
	}

	@Transactional
	public Calendar updateCalendar(Calendar calendar) {
		return calendarRepo.save(calendar);
	}

	@Transactional
	public Boolean deleteCalendar(Long calendarId) {
		try {
			calendarRepo.delete(calendarId);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
