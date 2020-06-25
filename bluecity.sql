drop database if exists bluecity;
create database bluecity;
use bluecity;

create table parkings(
id int(11) primary key not null,
lat varchar(255) not null,
`long` varchar(255) not null,
`name` varchar(255) not null,
createdAt datetime not null,
updateAt datetime not null
);

create table users(
id int(11) primary key not null,
`password` varchar(255) not null,
`name` varchar(255) not null,
username varchar(255) not null,
isAdmin tinyint(1) not null,
createAt datetime not null,
updateAt datetime not null
);

create table boxes(
id int(11) primary key not null,
occupied tinyint(1) not null,
userId int(11) not null,
foreign key(userId) references users(id) on update cascade on delete restrict,
parkingId int(11) not null,
foreign key(parkingId) references parkings(id) on update cascade on delete restrict,
createAt datetime not null,
updateAt datetime not null
);

create table scooters(
id int(11) primary key not null,
userId int(11) not null,
foreign key(userId) references users(id) on update cascade on delete restrict,
boxId int(11) not null,
foreign key(boxId) references boxes(id) on update cascade on delete restrict,
createAt datetime not null,
updateAt datetime not null
);

create table sequelizemeta(
`namesequelizemeta` varchar(255) primary key not null
);