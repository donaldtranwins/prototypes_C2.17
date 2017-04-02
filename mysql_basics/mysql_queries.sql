Place your queries below
SELECT * FROM `todo_items` WHERE `user_id`=2;
INSERT INTO `todo_items` SET `id`=null, `title`='nigiri', `details`='gimme dat eel sauce', `timestamp`=null, `user_id`=2;
DELETE FROM `todo_items` WHERE `title`='nigiri';
UPDATE `todo_items` SET `title`='karaage' WHERE `title`='bento';
SELECT * FROM `users` WHERE `id`=2;