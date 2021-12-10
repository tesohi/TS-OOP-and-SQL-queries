    SELECT Students.FirstName, Students.LastName
    FROM Students INNER JOIN Exams ON Students.StudentId = Exams.StudentId
    WHERE Exams.Result < 3
    GROUP BY Students.FirstName, Students.LastName
    HAVING Count(Exams.ExamName) > 2

/*=============================================*/


    SELECT ResTable.Group
    FROM (SELECT Students.FirstName, Students.Group
          FROM Students INNER JOIN Exams ON Students.StudentId = Exams.StudentId
          WHERE Exams.Result < 3
          GROUP BY Students.FirstName, Students.Group
          HAVING Count(Exams.ExamName) > 2)  AS ResTable
    GROUP BY ResTable.Group
    HAVING Count(ResTable.FirstName) > 10
