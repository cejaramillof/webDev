#Domain Drive Design

##Tactical Design
- **Model-Driven Design** (Modelar el diseño, con base en los modelos ya existentes en la empresa)
Se expresa en:
	- **Services**
	- **Entities** (tiene identificador, se puede enumerar) - Es relativo al contexto
		Se mantiene la integridad por:
			- **Aggregates** ej: clase video, un agregado sería comentario
		Cuando cambia el estado de una entidad, se publica:
			- **Domain Events**
	- **Value Objects** (Se identifica por el valor que contiene) ej: colores (rojo) - Es relativo al contexto
		Se encapsulan con:
			- **Aggregates**
			- **Factories**	
	- **Repositories**
		Para Acceder a:
		- **Entities**
		- **Aggregates**
	- **Domain Events** (Event Storming) Un evento que ha pasado ej: un video ha sido publicado
	- **Aggregates** 
		se encapsulan con:
			- **Factories**
Todo esto se combina con:
	- **Layared Architecture** (Arquitectura por capas) (LayaredArchitecture != Arquitectura Hexagonal), Usualmente en DDD se usa Arquitectura Hexagonal, para que el dominio se vea condicionado/acoplado a la base de datos.
	
*Conceptos de Strategic Design*	
Le da una estructura:
	-- *Ubiquitous Language* (Como habla el negocio, reflejarlo en el código)
Se define con:
	- *Bounded Context* Modelos que se repiten en otros packages. Son un reflejo de la estructura organizacional de la empresa. Nos ayudan a definir limites
		Se nombra con:
			-- *Ubiquitous Language*
#Strategic Design

- **Bounded Context**
	Los modelos tocados se unifican con:
		- **Continuos Integration**
	Las relaciones se mapean con:
		- **Context Map** Hacer el mapeo de conceptos a código programación
			Se segrega el código espaguetti con:
				- **Big Ball of Mud**
			Con este podemos ver cómo aplicar
				- **Anticorruption Layer**
			Libertad para equipos:
				- **Separate Ways**
			Le da soporte a multiples clientes atraves de:
				- **Open Host Service**
					Se formaliza atraves de:
						- **Published Language** (api, documentacion)
			Cosas que podemos compartir:
				- **Shared Kernel** ej: contexiones a bases de datos, value object de user_id, identificadores
			Se relacionan los contextos con:
				- **Customer/Supplier Teams**
			Se sobrepone con:
				- **Conformist**

