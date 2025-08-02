USE [master];
GO

-- Verificar si la base de datos ya existe y eliminarla si es necesario
IF EXISTS (SELECT name FROM sys.databases WHERE name = 'AdventureWorksDW2022')
BEGIN
    ALTER DATABASE AdventureWorksDW2022 SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE AdventureWorksDW2022;
END
GO

-- Restaurar la base de datos
RESTORE DATABASE AdventureWorksDW2022
FROM DISK = N'/var/opt/mssql/backup/AdventureWorksDW2022.bak'
WITH
    MOVE 'AdventureWorksDW2022' TO '/var/opt/mssql/data/AdventureWorksDW2022.mdf',
    MOVE 'AdventureWorksDW2022_log' TO '/var/opt/mssql/data/AdventureWorksDW2022_log.ldf',
    REPLACE,
    STATS = 10;
GO

-- Verificar que la base de datos se restauró correctamente
SELECT name, database_id, create_date 
FROM sys.databases 
WHERE name = 'AdventureWorksDW2022';
GO

PRINT 'Base de datos AdventureWorksDW2022 restaurada exitosamente';
GO