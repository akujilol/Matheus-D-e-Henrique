create table materiais_construcao(
	id serial primary key,
	nome varchar(160) not null,
	categoria varchar(160) not null,
	valor numeric(1000) not null,
	unidade_medida varchar(160) not null
)

insert into materiais_construcao (nome, categoria, valor, unidade_medida)
values 
	('Saco de Cimento 50KG', 'Básico', 38, 'Saco'),
	('Tijolo Cerâmico 6 Furos', 'Alvenaria', 1, 'Unidade'),
	('Tinta Acrílica Branca', 'Pintura', 235, 'Lata'),
	('Tubo PVC Soldável 6m', 'Hidráulica', 30, 'Barra'),
	('Cabo Flexível 2,5mm² 100m', 'Elétrica', 195, 'Rolo')

select * from materiais_construcao