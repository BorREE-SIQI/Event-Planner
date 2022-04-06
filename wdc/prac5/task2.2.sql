USE enrolment;

CREATE TABLE Students(
    student_id INT,
    given_name VARCHAR(63),
    family_name VARCHAR(63),
    program VARCHAR(255),
    PRIMARY KEY (student_id)
);

CREATE TABLE Subjects(
    subject_code INT,
    subject VARCHAR(127),
    faculty VARCHAR(63),
    PRIMARY KEY (subject_code)
);

CREATE TABLE Enrolments(
    student_id INT,
    subject_code INT,
    mark INT,
    PRIMARY KEY (student_id,subject_code)
);