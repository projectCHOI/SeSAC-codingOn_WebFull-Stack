-- Active: 1733117497760@@127.0.0.1@3306@sesac
############### SQL 연결 확인 ###############
SHOW DATABASES;
USE sesac;
SHOW TABLES;
############### sesac; 연결 확인 ###############

############### DCL ###############
-- MySQL 사용자 생성
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';
-- 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;
SELECT * FROM mysql.user;
show GRANTS for 'sesac'@'%';