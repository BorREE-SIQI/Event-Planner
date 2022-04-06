USE enrolment;

CREATE TABLE Students(
    student_id VARCHAR(63),
    given_name VARCHAR(63),
    family_name VARCHAR(63),
    program VARCHAR(255),
    PRIMARY KEY (student_id)
);

CREATE TABLE Subjects(
    subject_code VARCHAR(63),
    subject VARCHAR(127),
    faculty VARCHAR(63),
    PRIMARY KEY (subject_code)
);

CREATE TABLE Enrolments(
    student_id VARCHAR(63),
    subject_code VARCHAR(63),
    mark INT,
    PRIMARY KEY (student_id,subject_code)
);