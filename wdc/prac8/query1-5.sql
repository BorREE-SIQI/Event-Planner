SELECT length FROM film
  WHERE film_id = (SELECT actor_id FROM TableB
                     WHERE column2 = 'a');