use mentorondemand;

insert into user(user_name, user_password, user_email, user_birthday, contact_number, status) 
values('Adam', '11111111', 'Adam@cn.ibm.com', '1980-05-05', '12345678', 1);

insert into mentor(mentor_name, mentor_password, mentor_email, mentor_experience, contact_number, rating, active) 
values('John', '11111111', 'John@cn.ibm.com', '2', '12345678', '3', 1);

insert into mentor(mentor_name, mentor_password, mentor_email, mentor_experience, contact_number, rating, active) 
values('Michael', '11111111', 'Michael@cn.ibm.com', '3', '12345678', '4', 1);

insert into mentor(mentor_name, mentor_password, mentor_email, mentor_experience, contact_number, rating, active) 
values('Jacob', '11111111', 'Jacob@cn.ibm.com', '2', '12345678', '5', 1);

insert into skill(skill_name, skill_duration, prerequisites)
values('Java', 90, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('C', 80, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('C#', 70, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('Python', 45, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('Spring Boot', 80, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('Mysql', 60, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('Docker', 30, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('Domino Lotus/Notes', 90, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('C++', 60, 'C');

insert into skill(skill_name, skill_duration, prerequisites)
values('React JS', 40, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('VUE JS', 40, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('Angular', 40, 'HTML5, TypeScript');

insert into skill(skill_name, skill_duration, prerequisites)
values('HTML5', 30, '');

insert into skill(skill_name, skill_duration, prerequisites)
values('TypeScript', '50', '');

INSERT INTO mentorondemand.mentor_skills
(mentor_id, skill_id)
VALUES(1, 1);
INSERT INTO mentorondemand.mentor_skills
(mentor_id, skill_id)
VALUES(1, 2);
INSERT INTO mentorondemand.mentor_skills
(mentor_id, skill_id)
VALUES(1, 9);
INSERT INTO mentorondemand.mentor_skills
(mentor_id, skill_id)
VALUES(2, 4);
INSERT INTO mentorondemand.mentor_skills
(mentor_id, skill_id)
VALUES(2, 6);
INSERT INTO mentorondemand.mentor_skills
(mentor_id, skill_id)
VALUES(2, 8);
INSERT INTO mentorondemand.mentor_skills
(mentor_id, skill_id)
VALUES(3, 1);
INSERT INTO mentorondemand.mentor_skills
(mentor_id, skill_id)
VALUES(3, 5);
INSERT INTO mentorondemand.mentor_skills
(mentor_id, skill_id)
VALUES(3, 7);
INSERT INTO mentorondemand.mentor_skills
(mentor_id, skill_id)
VALUES(3, 12);
