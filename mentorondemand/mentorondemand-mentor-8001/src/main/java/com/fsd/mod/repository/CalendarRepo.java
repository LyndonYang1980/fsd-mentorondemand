package com.fsd.mod.repository;

import org.springframework.data.repository.CrudRepository;

import com.fsd.mod.entities.Calendar;

public interface CalendarRepo extends CrudRepository<Calendar, Long> {

}
