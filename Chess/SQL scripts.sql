#for creating a chess board table
create table board (
row_no int not null auto_increment,
a varchar(10),
b varchar(10),
c varchar(10),
d varchar(10),
e varchar(10),
f varchar(10),
g varchar(10),
h varchar(10),
primary key (row_no));

#repeat 8 times to create an empty chess board
insert into board (a,b,c,d,e,f,g,h)
values (NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

#display the values of the chess board
select * from board;

#clear the board of everything
update board
set
a = null,
b = null,
c = null,
d = null,
e = null,
f = null,
g = null,
h = null;

#standard row
update board
set 
a = 'rook',
b = 'knight',
c = 'bishop',
d = 'queen',
e = 'king',
f = 'bishop',
g = 'knight',
h = 'rook'
where row_no = (1,8);
