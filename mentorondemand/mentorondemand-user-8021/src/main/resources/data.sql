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
values('Java', '50', '');

insert into skill(skill_name, skill_duration, prerequisites)
values('C', '80', '');

insert into skill(skill_name, skill_duration, prerequisites)
values('C++', '60', 'C');

insert into skill(skill_name, skill_duration, prerequisites)
values('Angular', '50', 'HTML5, TypeScript');

insert into skill(skill_name, skill_duration, prerequisites)
values('HTML5', '50', '');

insert into skill(skill_name, skill_duration, prerequisites)
values('TypeScript', '50', '');