use mentorondemand;

insert into user(user_name, user_password, user_email, reg_date, contact_number, status, role) 
values('Adam', md5('11111111'), 'Adam@cn.ibm.com', '2020-12-31', '12345678', 1, 'user');

insert into mentor(mentor_name, mentor_password, mentor_email, mentor_experience, contact_number, rating, active, role) 
values('John', '11111111', 'John@cn.ibm.com', '2', '12345678', '3', 1, 'mentor');

insert into mentor(mentor_name, mentor_password, mentor_email, mentor_experience, contact_number, rating, active) 
values('Michael', '11111111', 'Michael@cn.ibm.com', '3', '12345678', '4', 1, 'mentor');

insert into mentor(mentor_name, mentor_password, mentor_email, mentor_experience, contact_number, rating, active) 
values('Jacob', '11111111', 'Jacob@cn.ibm.com', '2', '12345678', '5', 1, 'mentor');

INSERT INTO skill(mentor_id, prerequisites, skill_name, year_of_exp)
VALUES(1, '', 'Java', 5), (1, 'C', 'C++', 3), (1, '', 'C', 4), (1, '', 'Spring Boot', 3);

INSERT INTO skill(mentor_id, prerequisites, skill_name, year_of_exp)
VALUES(2, '', 'HTML5', 4), (2, '', 'TypeScript', 3), (2, '', 'Angular', 3), (2, '', 'React Js', 3);

INSERT INTO skill(mentor_id, prerequisites, skill_name, year_of_exp)
VALUES(3, '', 'HTML5', 3), (3, '', 'Java', 4), (3, '', 'Python', 2), (3, '', 'Vue Js', 3), (3, '', 'Spring Boot', 2);

INSERT INTO calendar (mentor_id, start_date, end_date, start_time, end_time)
VALUES(1, '2021-01-01', '2021-01-29', '2021-01-01 09:00:00', '2021-01-01 11:00:00');

INSERT INTO calendar (mentor_id, start_date, end_date, start_time, end_time)
VALUES(2, '2021-02-01', '2021-02-15', '2021-01-01 13:00:00', '2021-01-01 15:00:00');

INSERT INTO calendar (mentor_id, start_date, end_date, start_time, end_time)
VALUES(3, '2021-02-16', '2021-02-25', '2021-01-01 15:00:00', '2021-01-01 17:00:00');

INSERT INTO training (training_id, amount_received, start_date, start_time, end_date, end_time, fee, mentor_id, progress, rating, skill_id, status, user_id)
values (1, 0, null, null, null, null, 0, 1, 0, 0, 1, 'proposed', 1),(2, 0, null, null, null, null, 0, 1, 0, 0, 2, 'proposed', 1)


