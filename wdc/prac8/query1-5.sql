SELECT length FROM film
  WHERE  = (SELECT column2 FROM TableB
                     WHERE column2 = 'a');