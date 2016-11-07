CREATE DATABASE MagazineCMS;
-- create Admin table
CREATE TABLE Admin(
  aid INT AUTO_INCREMENT,
  userName VARCHAR(20),
  password VARCHAR(50),
  CONSTRAINT PRIMARY KEY(aid)
)
-- create Role table
CREATE TABLE Role(
  rid INT AUTO_INCREMENT,
  role_name VARCHAR(50),
  CONSTRAINT PRIMARY KEY(rid)
)
-- create AcademyYear table
CREATE TABLE AcademyYear(
    aid int AUTO_INCREMENT,
    year int,
    CONSTRAINT pk_academy_year PRIMARY KEY (aid)
)
-- create Faculties table
CREATE TABLE Faculties(
  fid INT AUTO_INCREMENT,
  fname VARCHAR(50),
  CONSTRAINT pk_facultites PRIMARY KEY(fid)
)
-- create Faculties_Academy table
CREATE TABLE faculties_academy(
  fid INT,
  aid INT,
  CONSTRAINT pk_fac_acedemy PRIMARY KEY(fid, aid),
  CONSTRAINT fk_facultites FOREIGN KEY(fid) REFERENCES faculties(fid),
  CONSTRAINT fk_academy FOREIGN KEY(fid) REFERENCES academyyear(aid)
)
-- create Students table
CREATE TABLE Students(
  sid INT AUTO_INCREMENT,
  name VARCHAR(50),
  gender VARCHAR(6),
  email VARCHAR(50),
  CONSTRAINT pk_students PRIMARY KEY(sid)
)
-- create Students_Faculties table
CREATE TABLE Students_Facultites(
  sid INT,
  fid INT,
  CONSTRAINT pk_students_facultites PRIMARY KEY(sid, fid),
  CONSTRAINT fk_students FOREIGN KEY(sid) REFERENCES students(sid),
  CONSTRAINT fk_faculties FOREIGN KEY(fid) REFERENCES faculties(fid)
)
-- create Magazine table
CREATE TABLE Magazine(
  mid INT AUTO_INCREMENT,
  magazine_name VARCHAR(100),
  start_date DATE,
  end_date DATE,
  CONSTRAINT pk_magazine PRIMARY KEY(mid)
)
-- create Magazine_Academy table
CREATE TABLE Magazine_Academy(
  mid INT,
  aid INT,
  CONSTRAINT pk_magazine_academy PRIMARY KEY (mid, aid),
  CONSTRAINT fk_magazines FOREIGN KEY (mid) REFERENCES magazine(mid),
  CONSTRAINT fk_academys FOREIGN KEY (aid) REFERENCES academyyear(aid)
)
-- create Staff table
CREATE TABLE Staff(
  stid INT AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(50),
  user_name VARCHAR(20),
  password VARCHAR(50),
  CONSTRAINT PRIMARY KEY(stid)
)
-- create Role_Staff_Academy table
CREATE TABLE Role_Staff_Academy(
	rid INT,
  stid INT,
  aid INT,
  CONSTRAINT pk_staff_fac_academy PRIMARY KEY(rid, stid, aid),
	CONSTRAINT fk_role FOREIGN KEY(rid) REFERENCES role(rid),
  CONSTRAINT fk_staff FOREIGN KEY(stid) REFERENCES staff(stid),
  CONSTRAINT fk_acedemy_2 FOREIGN KEY(aid) REFERENCES academyyear(aid)
)
-- create Staff_Faculties_Academy table
CREATE TABLE Staff_Faculties_Academy(
  stid INT,
  fid INT,
  aid INT,
  CONSTRAINT pk_staff_faculties_academy PRIMARY KEY(stid, fid, aid),
  CONSTRAINT fk_staff_2 FOREIGN KEY(stid) REFERENCES staff(stid),
  CONSTRAINT fk_faculties_2 FOREIGN KEY(fid) REFERENCES faculties(fid),
  CONSTRAINT fk_academy_2 FOREIGN KEY(aid) REFERENCES academyyear(aid)
)
-- create Guest table
CREATE TABLE Guest(
  gid INT AUTO_INCREMENT,
  user_name VARCHAR(20),
  PASSWORD VARCHAR(20),
  CONSTRAINT pk_guest PRIMARY KEY(gid)
)
-- create Guest_Faculties table
CREATE TABLE Guest_Faculties(
  gid INT,
  fid INT,
  CONSTRAINT pk_guest_faculties PRIMARY KEY(gid, fid),
  CONSTRAINT fk_guest FOREIGN KEY(gid) REFERENCES guest(gid),
  CONSTRAINT fk_faculties_3 FOREIGN KEY(fid) REFERENCES faculties(fid)
)
-- create Article table
CREATE TABLE Article(
  atid INT AUTO_INCREMENT,
  title VARCHAR(50),
  description VARCHAR(200),
  image VARCHAR(100),
  source_file VARCHAR(150),
  date_submit DATE,
  STATUS VARCHAR(50),
  CONSTRAINT pk_article PRIMARY KEY(atid)
)
-- create Article_Student_Faculties table
CREATE TABLE Article_Student_Faculties(
  atid INT,
  sid INT,
  fid INT,
  CONSTRAINT pk_article_student PRIMARY KEY(atid, sid, fid),
  CONSTRAINT fk_article_1 FOREIGN KEY(atid) REFERENCES article(atid),
  CONSTRAINT fk_astudent_1 FOREIGN KEY(sid) REFERENCES students(sid),
  CONSTRAINT fk_faculties_4 FOREIGN KEY(fid) REFERENCES faculties(fid)
)
-- create Comment table
CREATE TABLE COMMENT(
  cmid INT AUTO_INCREMENT,
  stid INT,
  atid INT,
  COMMENT VARCHAR(150),
  comment_date DATE,
  CONSTRAINT pk_comment PRIMARY KEY(cmid),
  CONSTRAINT fk_staff_comment FOREIGN KEY(stid) REFERENCES staff(stid),
  CONSTRAINT fk_article_comment FOREIGN KEY(atid) REFERENCES article(atid)
)



-- DB 2.0

-- create User table
CREATE TABLE USER(
  uid INT AUTO_INCREMENT,
  full_name VARCHAR(50),
  dob DATE,
  gender VARCHAR(6),
  email VARCHAR(50),
  password VARCHAR(50),
  phone INT,
  CONSTRAINT pk_user PRIMARY KEY(uid)
)
-- create Role table
CREATE TABLE Role(
  rid INT AUTO_INCREMENT,
  role_name VARCHAR(50),
  CONSTRAINT PRIMARY KEY(rid)
)
-- create User_Role table
CREATE TABLE User_Role(
  uid INT,
  rid INT,
  CONSTRAINT pk_user_role PRIMARY KEY(uid, rid),
  CONSTRAINT fk_user_1 FOREIGN KEY(uid) REFERENCES USER(uid),
  CONSTRAINT fk_role_1 FOREIGN KEY(rid) REFERENCES role(rid)
)
-- create AcademyYear table
CREATE TABLE AcademyYear(
    aid int AUTO_INCREMENT,
    year int,
    CONSTRAINT pk_academy_year PRIMARY KEY (aid)
)
-- create Faculties table
CREATE TABLE Faculties(
  fid INT AUTO_INCREMENT,
  falcuties_name VARCHAR(50),
  CONSTRAINT pk_facultites PRIMARY KEY(fid)
)
-- create Students_Faculties table
CREATE TABLE Students_Faculties(
  uid INT,
  fid INT,
  CONSTRAINT pk_student_faculties PRIMARY KEY(uid, fid),
  CONSTRAINT fk_student_4 FOREIGN KEY(uid) REFERENCES USER(uid),
  CONSTRAINT fk_faculties_4 FOREIGN KEY(fid) REFERENCES faculties(fid)
)
-- create MC_Faculties table
CREATE TABLE MC_Faculties(
  uid INT,
  fid INT,
  CONSTRAINT pk_mc_faculties PRIMARY KEY(uid, fid),
  CONSTRAINT fk_mc_1 FOREIGN KEY(uid) REFERENCES USER(uid),
  CONSTRAINT fk_faculties_5 FOREIGN KEY(fid) REFERENCES faculties(fid)
)
-- create Guest_Faculties table
CREATE TABLE Guest_Faculties(
  uid INT,
  fid INT,
  CONSTRAINT pk_guest_faculties PRIMARY KEY(uid, fid),
  CONSTRAINT fk_guest_1 FOREIGN KEY(uid) REFERENCES USER(uid),
  CONSTRAINT fk_faculties_6 FOREIGN KEY(fid) REFERENCES faculties(fid)
)
-- create Magazine table
CREATE TABLE Magazine(
  mid INT AUTO_INCREMENT,
  magazine_name VARCHAR(100),
  start_date DATE,
  end_date DATE,
  CONSTRAINT pk_magazine PRIMARY KEY(mid)
)
-- create Magazine_Academy table
CREATE TABLE Magazine_Academy(
  mid INT,
  aid INT,
  CONSTRAINT pk_magazine_academy PRIMARY KEY(mid, aid),
  CONSTRAINT fk_magazine_1 FOREIGN KEY(mid) REFERENCES magazine(mid),
  CONSTRAINT fk_academy_1 FOREIGN KEY(aid) REFERENCES academyyear(aid)
)
-- create table Article
CREATE TABLE Article(
  atid INT AUTO_INCREMENT,
  title VARCHAR(50),
  description VARCHAR(150),
  file_source VARCHAR(100),
  img_source VARCHAR(100),
  date_submit DATE,
  STATUS VARCHAR(50),
  CONSTRAINT pk_article PRIMARY KEY(atid)
)
-- create Article_Student table
CREATE TABLE Article_Student(
  atid INT,
  uid INT,
  CONSTRAINT pk_article_student PRIMARY KEY(atid, uid),
  CONSTRAINT fk_article_3 FOREIGN KEY(atid) REFERENCES article(atid),
  CONSTRAINT fk_student_3 FOREIGN KEY(uid) REFERENCES USER(uid)
)
-- create Article_Magazine table
CREATE TABLE Article_Magazine(
  atid INT,
  mid INT,
  CONSTRAINT pk_article_magazine PRIMARY KEY(atid, mid),
  CONSTRAINT fk_article_1 FOREIGN KEY(atid) REFERENCES article(atid),
  CONSTRAINT fk_magazine_2 FOREIGN KEY(mid) REFERENCES magazine(mid)
)
-- creae Comment table
CREATE TABLE COMMENT(
  cmid INT AUTO_INCREMENT,
  uid INT,
  atid INT,
  COMMENT VARCHAR(200),
  comment_date DATE,
  CONSTRAINT pk_comment PRIMARY KEY(cmid),
  CONSTRAINT fk_user_2 FOREIGN KEY(uid) REFERENCES USER(uid),
  CONSTRAINT fk_article_2 FOREIGN KEY(atid) REFERENCES article(atid)
)
