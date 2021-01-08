package com.fsd.mod.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fsd.mod.entities.Calendar;

public interface CalendarRepo extends CrudRepository<Calendar, Long> {

	public List<Calendar> findByMentorId(Long mentorId);

	@Query(value = "select * from calendar where date(start_date) = date(:startDate) and date(end_date) = date(:endDate) and time(start_time) = time(:startTime) and time(end_time) = time(:endTime)", nativeQuery = true)
	public List<Calendar> findExistingCalendar(@Param("startDate") Date startDate, @Param("endDate") Date endDate,
			@Param("startTime") Date startTime, @Param("endTime") Date endTime);

	@Query(value = "select * from calendar where date(start_date) = date(:startDate) and date(end_date) = date(:endDate) and time(start_time) = time(:startTime) and time(end_time) = time(:endTime) and calendar_id <> :calendarId", nativeQuery = true)
	public List<Calendar> findExistingCalendar(@Param("startDate") Date startDate, @Param("endDate") Date endDate,
			@Param("startTime") Date startTime, @Param("endTime") Date endTime, @Param("calendarId") Long calendarId);
}
