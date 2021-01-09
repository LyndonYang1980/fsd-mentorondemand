use mentorondemand;

insert into user(user_name, user_password, user_email, reg_date, contact_number, status) 
values('Adam', '11111111', 'Adam@cn.ibm.com', '2020-12-31', '12345678', 1);

insert into mentor(mentor_name, mentor_password, mentor_email, mentor_experience, contact_number, rating, active) 
values('John', '11111111', 'John@cn.ibm.com', '2', '12345678', '3', 1);

insert into mentor(mentor_name, mentor_password, mentor_email, mentor_experience, contact_number, rating, active) 
values('Michael', '11111111', 'Michael@cn.ibm.com', '3', '12345678', '4', 1);

insert into mentor(mentor_name, mentor_password, mentor_email, mentor_experience, contact_number, rating, active) 
values('Jacob', '11111111', 'Jacob@cn.ibm.com', '2', '12345678', '5', 1);

INSERT INTO skill(mentor_id, prerequisites, skill_name, year_of_exp)
VALUES(1, '', 'Java', 5), (1, 'C', 'C++', 3), (1, '', 'C', 4), (1, '', 'Spring Boot', 3);

INSERT INTO skill(mentor_id, prerequisites, skill_name, year_of_exp)
VALUES(2, '', 'HTML5', 4), (2, '', 'TypeScript', 3), (2, '', 'Angular', 3), (2, '', 'React Js', 3);

INSERT INTO skill(mentor_id, prerequisites, skill_name, year_of_exp)
VALUES(3, '', 'HTML5', 3), (3, '', 'Java', 4), (3, '', 'Python', 2), (3, '', 'Vue Js', 3), (3, '', 'Spring Boot', 2);



