
CREATE DATABASE isil;
use isil;
    
CREATE TABLE IF NOT EXISTS `recours` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_student` int(11) NOT NULL COMMENT 'foreign key student',
  `module` varchar(20) NOT NULL,
  `nature` enum('CC','Examen') NOT NULL COMMENT 'nature: cc ou examen',
  `note_affiche` int(11) NOT NULL,
  `note_reel` int(11) NOT NULL,
  `status` int(11) NULL,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `groupe` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);



INSERT INTO `students` (`id`, `nom`, `prenom`, `email`, `groupe`) VALUES
(2, 'YAHIATENE', 'tasnime', 'yahiatene.y@gmail.com', 1),
(3, 'YAHIATENE', 'youcef', 'yahiatene.y@gmail.com', 3),
(12, 'ouled', 'ayoub', 'ayoub@gmail.com', 1),
(13, 'YAHIATENErtrt', 'younes', 'yahiatene.y@gmail.com', 43),
(14, 'yanis', 'yacef', 'yanis.y@gmail.com', 2),
(18, 'morad', 'ali', 'ali@gmail.com', 2),
(19, 'morad', 'ali', 'ali@gmail.com', 2),
(20, 'Youcef', 'Maoudj', 'ali@gmail.com', 2),
(21, 'Youcef', 'Maoudj', 'ali@gmail.com', 2);
COMMIT;

