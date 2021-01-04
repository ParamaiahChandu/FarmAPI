--CREATE DATABASE FarmDB

--CREATE TABLE dbo.Species(
--SpeciesId INT IDENTITY(1,1),
--SpeciesName VARCHAR(500)
--)

--INSERT INTO Species VALUES ('Mango'), ('Guava'), ('Jujube')

SELECT SpeciesId, SpeciesName FROM dbo.Species

--CREATE TABLE dbo.Sapling(
--SaplingId INT IDENTITY(1,1),
--SaplingName VARCHAR(500),
--Species VARCHAR(500),
--DateOfPlantation DATE,
--PhotoFileName VARCHAR(500)
--)

--INSERT INTO Sapling VALUES
--('Banganapalli Mamidi', 'Mango', '2020-06-01', 'MangoSapling.jpg')
--,('Thai Pink Jama', 'Guava', '2020-06-01', 'GuavaSapling.jpg')
--,('Apple Bear', 'Jujube', '2020-06-01', 'AppleBearSapling.jpg')

SELECT * FROM Sapling
