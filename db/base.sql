use archivos;

CREATE TABLE USUARIOS (usu_id int not null primary key,
					  usu_nombre varchar(50) not null,
					  usu_apellido varchar(50) not null,
					  usu_sexo varchar (10) not null,
					  usu_telefono varchar(15)not null,
					  usu_correo varchar (60) not null,
					  usu_password varchar (8) not null );
					
					  

CREATE TABLE ARCHIVOS (arch_id int not null  primary key,
					  arch_tipo int not null,
					  arch_direccion varchar(100) not null,
					  arch_fecha date not null,
					  arch_favoritos boolean not null );
			
			
CREATE TABLE CUENTA (cuen_id int not null  primary key,
					cuen_premium varchar(50) not null,
					cuen_gratuita varchar(50) not null );
					 
					 
					 
CREATE TABLE RECICLAJE (rec_id int not null  primary key,	
					   rec_archivo int not null );