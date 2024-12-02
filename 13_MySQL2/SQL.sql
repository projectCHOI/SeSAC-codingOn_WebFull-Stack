-- Active: 1733117497760@@127.0.0.1@3306@sesac
############### SQL 연결 ###############
SHOW DATABASES;
USE sesac;
SHOW TABLES;
############### DCL ###############
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';
SELECT User, Host FROM mysql.user WHERE User = 'sesac';
DROP USER 'sesac'@'%';
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';
GRANT SELECT, INSERT, UPDATE, DELETE ON sesac.* TO 'sesac'@'%';
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'sesac'@'%';